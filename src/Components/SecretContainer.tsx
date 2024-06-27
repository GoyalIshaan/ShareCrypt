import React from 'react';
const SecretContainer: React.FC<SecretContainerProps> = ({
  text,
  prop,
  alternate = false,
}) => {
  return (
    <div
      className={`${alternate ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
    >
      <dt className="text-sm font-medium text-gray-500">{text}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {prop || 'Not provided'}
      </dd>
    </div>
  );
};
interface SecretContainerProps {
  text: string;
  prop: string | number | null;
  alternate?: boolean;
}

export default SecretContainer;
