import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router-dom';

interface Card {
  title: string;
  description: string;
  link: string;
}

const exampleCards: Card[] = [
  {
    title: 'Secret Link 1',
    description: 'Discover the secrets behind the first link.',
    link: '/encrypt?key=U2FsdGVkX18LfZCezeTiXaqFt7A%2FJ8%2FWqh2aehDlqyUTvH04x3n9Mbce1JCdAX2D1v6ScXFDrulSSS2rf0bG18IbbbyVImOv8ZR5JTlmpr1Hl4idpqWa%2FWFdU3NHpzLY',
  },
  {
    title: 'Secret Link 2',
    description: "Find out what's hidden in the second secret.",
    link: '/encrypt?key=U2FsdGVkX19Q5ASe5Y%2Bo5adgF5xO0BznAVTEaQP1ND0mhpzcMtbpuculZe%2BLNCMxbEC3I7s2YHoh1xg5s8dKF8iLwBHL4OrcCGHfUHIohup6iqRZwflizSHLxDA8nnZW',
  },
  {
    title: 'Secret Link 3',
    description: 'Unveil the mystery of the third secret link.',
    link: '',
  },
];

const EmblaCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const navigate = useNavigate();

  const handleNavigate = (link: string): void => {
    navigate(link);
  };

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {exampleCards.map((card) => (
          <div
            key={card.title}
            className="flex-none w-full min-w-0 cursor-pointer"
            onClick={() => handleNavigate(card.link)}
          >
            <div className="bg-slate-100 rounded-lg p-4 m-2 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
