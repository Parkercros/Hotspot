import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { IconType } from 'react-icons';
import useCountries from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';
import Button from '../Button';
import MessagingModal from '@/app/components/modals/MessagingModal';

const Map = dynamic(() => import('../Map'), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType;
    label: string;
    description: string;
  } | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  const [isMessagingModalOpen, setIsMessagingModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null); // new state variable

  const handleOpenMessagingModal = () => {
    setIsMessagingModalOpen(true);
    setMessage('');
  };

  const handleCloseMessagingModal = () => {
    setIsMessagingModalOpen(false);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationValue}?unitGroup=metric&key=BPJCXLBPMLKKKZ6WJCZUPF8WR&contentType=json`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [locationValue]);

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
          
        </div>
        <button
          className="bg-rose-500 text-white px-2 py-1 rounded text-sm"
          onClick={handleOpenMessagingModal}
        >
          Contact Host
        </button>
        {isMessagingModalOpen && (
          <MessagingModal
            isOpen={isMessagingModalOpen}
            onClose={handleCloseMessagingModal}
            onSubmit={handleCloseMessagingModal}
            message={message}
            onMessageChange={handleMessageChange}
            user={user}
            title={`Send a message to ${user.name}`}
            actionLabel="Send"
          />
        )}
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={coordinates} />
      {weatherData && (
        <div className="bg-neutral-100 p-4 rounded-md">
          <div className="text-lg font-semibold mb-2">Weather Information</div>
          <div>
            <strong>Temperature:</strong> {weatherData.days[0].temp}°C
          </div>
          <div>
            <strong>Conditions:</strong> {weatherData.days[0].conditions}
          </div>
        </div>
      )}
    </div>
  );
  
  
};

export default ListingInfo;
