# ShareCrypt

ShareCrypt is a modern web application designed to enhance the security and privacy of information sharing over the internet. By allowing users to encrypt their data directly into a URL's search query, ShareCrypt ensures that sensitive information can be shared securely and privately with just a single link. This method eliminates the need for complex encryption tools and simplifies the process of secure communication.

## Project Overview

ShareCrypt leverages a unique approach to data sharing where users input their information, which is then encrypted and encoded into a search query. This generates a unique, secure link that can be shared with anyone. The recipient can use this link to decrypt and view the information without needing any special software, ensuring that the data remains confidential and secure throughout the transmission process.

### Key Features

- **Secure Encryption**: Utilizes robust encryption standards to secure data.
- **Easy Sharing**: Generates a link that can be easily shared with anyone.
- **No Additional Software Required**: Decrypts information directly through the link without the need for external tools.

## How Encryption Works

ShareCrypt uses CryptoJS, a JavaScript library of crypto standards, to provide secure encryption and decryption functionality. When a user inputs data into ShareCrypt:

1. **Data Encryption**: The input data is encrypted using CryptoJS's AES encryption method. AES (Advanced Encryption Standard) is a symmetric encryption algorithm that ensures data security and integrity.
2. **URL Encoding**: The encrypted data is then encoded into a search query format. This encoding ensures that the data remains intact and unaltered during transmission through web URLs.
3. **Link Generation**: A unique URL is generated which embeds the encrypted data within its query parameters.

When the recipient receives the link and opens it, ShareCrypt decrypts the query parameters using the same AES decryption method to retrieve the original information securely.

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![SWC](https://img.shields.io/badge/SWC-ffffff?style=for-the-badge&logo=swc)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Phosphor Icons](https://img.shields.io/badge/Phosphor_Icons-000000?style=for-the-badge&logo=phosphor-icons&logoColor=white)
![Embla Carousel](https://img.shields.io/badge/Embla_Carousel-009688?style=for-the-badge)
![React Leaflet](https://img.shields.io/badge/React_Leaflet-199900?style=for-the-badge&logo=react-leaflet&logoColor=white)
![CryptoJS](https://img.shields.io/badge/Crypto_JS-F7931A?style=for-the-badge&logo=crypto-js&logoColor=white)

## Challenges Faced

- **API Integration**: Integrating the encryption and decryption processes seamlessly into the frontend posed initial challenges, particularly with asynchronous data handling.
- **Performance Optimization**: Ensuring the application runs smoothly, particularly the map interactions and data encoding/decoding processes.
- **Responsive Design**: Implementing a fully responsive design using Tailwind CSS while maintaining the functionality across all devices.
  
## Contributing

Contributions to ShareCrypt are always welcome, whether it be improvements to the documentation or new functionalities. Please feel free to fork the repository and submit a pull request with your changes.

## License

ShareCrypt is released under the MIT License. See the bundled [LICENSE](LICENSE) file for details.

---

For more information on ShareCrypt, please visit [our homepage](https://github.com/GoyalIshaan/ShareCrypt).
