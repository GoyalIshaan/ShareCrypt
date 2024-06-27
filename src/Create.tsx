import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Map from './Components/Map';
import Input from './Components/Input';
import Button from './Components/Button';
import CryptoJS from 'crypto-js';

const Home: React.FC = () => {
  const secretKey = 'your-secret-key'; // secret key for encoding
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm<FieldValues>();
  const [loading, setIsLoading] = useState(false);
  const [lat, long] = watch(['latitude', 'longitude']);

  const getLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setValue('latitude', latitude.toString());
        setValue('longitude', longitude.toString());
        setIsLoading(false);
      });
    } else {
      console.log('there was an error');
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { name, number, latitude, longitude, secret } = data;

    //creating the key to be encrypted
    const key = `${encodeURIComponent(name)}&${encodeURIComponent(number)}&${encodeURIComponent(latitude)}&${encodeURIComponent(longitude)}&${encodeURIComponent(secret)}`;

    //creating the encrypted key
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify({ key }),
      secretKey,
    ).toString();
    const encryptedData = encodeURIComponent(ciphertext);

    navigate(`/encrypt?key=${encryptedData}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col md:flex-row p-6 gap-10">
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Name:
              </label>
              <Input
                name="name"
                placeholder="Enter Any Name"
                type="text"
                register={register}
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Any Number:
              </label>
              <Input
                name="number"
                register={register}
                placeholder="Enter Any Number"
                type="number"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                GeoLocation:
              </label>
              <div className="flex gap-2">
                <Input
                  name="latitude"
                  register={register}
                  placeholder="Enter Latitude"
                  type="text"
                  disabled={loading}
                />
                <Input
                  name="longitude"
                  register={register}
                  placeholder="Enter Longitude"
                  type="text"
                  disabled={loading}
                />
                <Button
                  onClick={getLocation}
                  tooltipText="Fills the geolocation with your current latitude and location"
                >
                  Get Location
                </Button>
              </div>
              {loading && <p className="text-gray-500">Loading...</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Secret Text:
              </label>
              <Input
                name="secret"
                register={register}
                placeholder="Enter Secret Text"
                type="text"
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              tooltipText="Submits this form and navigates you to the encrypted page"
            >
              Submit Form
            </Button>
          </form>
        </div>
        <div className="md:w-1/2 flex flex-col h-screen">
          <div className="flex-grow h-screen">
            <Map
              lat={lat ? parseFloat(lat) : undefined}
              long={long ? parseFloat(long) : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
