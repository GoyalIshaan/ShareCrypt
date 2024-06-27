import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Map from './Components/Map';
import SecretContainer from './Components/SecretContainer';
import CryptoJS from 'crypto-js';

const Encrypt: React.FC = () => {
  const secretKey = 'your-secret-key';
  const [params] = useSearchParams();

  //accessing and decoding the cipher text
  const cipherText = params.get('key')!;
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

  //converting thee string to a JSON object
  const jsonData = JSON.parse(decryptedText);

  //creating the values array
  const arr = jsonData.key.split('&');

  //accessing the elements from the array
  const name = arr[0];
  const number = arr[1];
  const latitude = parseFloat(arr[2] || '0');
  const longitude = parseFloat(arr[3] || '0');
  const secretMessage = decodeURIComponent(arr[4]) || '';
  const hasLocation = latitude && longitude;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Encryption Details:
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Contents of the Secret &mdash;
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details received from the encrypted link.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <SecretContainer text="Name" prop={name} alternate={true} />
              <SecretContainer text="Number" prop={number} />
              <SecretContainer
                text="Secret Message"
                prop={secretMessage}
                alternate={true}
              />
              {hasLocation && (
                <>
                  <SecretContainer text="Latitude" prop={latitude.toFixed(6)} />
                  <SecretContainer
                    text="Longitude"
                    prop={longitude.toFixed(6)}
                    alternate={true}
                  />
                  <div className="mt-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4 mb-2">
                      Secret Location:
                    </h3>
                    <Map lat={latitude} long={longitude} />
                  </div>
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encrypt;
