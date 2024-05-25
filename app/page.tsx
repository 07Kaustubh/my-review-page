'use client';

// pages/review.tsx
import Head from 'next/head';
import { useState, memo } from 'react';

// Types
type RatingProps = {
  label: string;
  description: string;
  rating: number;
  setRating: (rating: number) => void;
};

type RecommendationProps = {
  recommendation: boolean | null;
  setRecommendation: (recommendation: boolean) => void;
};

type PraiseProps = {
  traits: string[];
  setTraits: (trait: string) => void;
};

type ReviewState = {
  safetyRating: number;
  communicationRating: number;
  recommendation: boolean | null;
  traits: string[];
};

// Rating Component
const Rating = memo(({ label, description, rating, setRating }: RatingProps) => (
  <div className="py-5 border-b border-dashed border-gray-300">
    <h2 className="text-2xl">{label}</h2>
    <p className="text-sm font-sans text-[#babdc0]">{description}</p>
    <div className="text-7xl h-[100px] text-[#dddfe1] flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`transition-colors duration-150 cursor-pointer ${rating >= value ? 'text-[#FDCC0D]' : ''}`}
          onClick={() => setRating(value)}
          aria-label={`${label} rating ${value}`}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && setRating(value)}
        >
          ★
        </span>
      ))}
    </div>
  </div>
));

// Recommendation Component
const Recommendation = memo(({ recommendation, setRecommendation }: RecommendationProps) => (
  <div className="py-5 border-b border-dashed border-gray-300">
    <h2 className="text-2xl">Would you recommend Trausti?</h2>
    <p className="text-sm font-sans text-[#babdc0]">Your opinion won't be posted publicly</p>
    <div className="text-5xl flex h-[100px] gap-6 text-[#dddfe1]">
      <button
        className="flex items-center hover:bg-red-100"
        onClick={() => setRecommendation(false)}
        aria-label="No recommendation"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="hover:text-red-400 pr-3"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 56v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56zm40 200c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24zm272 256c-20.183 0-29.485-39.293-33.931-57.795-5.206-21.666-10.589-44.07-25.393-58.902-32.469-32.524-49.503-73.967-89.117-113.111a11.98 11.98 0 0 1-3.558-8.521V59.901c0-6.541 5.243-11.878 11.783-11.998 15.831-.29 36.694-9.079 52.651-16.178C256.189 17.598 295.709.017 343.995 0h2.844c42.777 0 93.363.413 113.774 29.737 8.392 12.057 10.446 27.034 6.148 44.632 16.312 17.053 25.063 48.863 16.382 74.757 17.544 23.432 19.143 56.132 9.308 79.469l.11.11c11.893 11.949 19.523 31.259 19.439 49.197-.156 30.352-26.157 58.098-59.553 58.098H350.723C358.03 364.34 384 388.132 384 430.548 384 504 336 512 312 512z"></path>
        </svg>
        <p className="text-[24px] font-sans">No</p>
      </button>
      <button
        className="flex items-center hover:bg-green-100"
        onClick={() => setRecommendation(true)}
        aria-label="Yes recommendation"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="hover:text-green-400 pr-3"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"></path>
        </svg>
        <p className="text-[24px] font-sans">Yes</p>
      </button>
    </div>
  </div>
));

// Praise Component
const Praise = memo(({ traits, setTraits }: PraiseProps) => (
  <div className="py-5 border-b border-dashed border-gray-300">
    <h2 className="text-2xl">What traits best describe Trausti?</h2>
    <div className="flex gap-4 mt-2">
      {traits.map((trait, index) => (
        <div
          key={index}
          className="cursor-pointer border border-gray-300 rounded-md px-3 py-1 hover:bg-green-100 transition-colors duration-150"
          onClick={() => setTraits(trait)}
        >
          {trait}
        </div>
      ))}
    </div>
  </div>
));

export default function Review() {
  const [reviewState, setReviewState] = useState<ReviewState>({
    safetyRating: 0,
    communicationRating: 0,
    recommendation: null,
    traits: [],
  });

  const handleRatingClick = (type: keyof ReviewState, rating: number) => {
    setReviewState((prevState) => ({ ...prevState, [type]: rating }));
  };

  const handleRecommendationClick = (value: boolean) => {
    setReviewState((prevState) => ({ ...prevState, recommendation: value }));
  };

  const handleTraitsClick = (trait: string) => {
    setReviewState((prevState) => ({
      ...prevState,
      traits: prevState.traits.includes(trait)
        ? prevState.traits.filter((t) => t !== trait)
        : [...prevState.traits, trait],
    }));
  };

  const traits = ['Adventurous', 'Clean', 'Good listener'];

  return (
    <>
      <Head>
        <title>Leave a Review</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-[100vh] px-4 py-2 w-full overflow-x-hidden bg-[#fdfdfd] text-[#343434] font-[calistoga]">
        <div>
          <div className="text-2xl">✖</div>
          <h1 className="text-4xl mb-4">Leave a review</h1>

          <Rating
            label="Safety"
            description="How safe did you feel with Trausti?"
            rating={reviewState.safetyRating}
            setRating={(rating) => handleRatingClick('safetyRating', rating)}
          />
          <Rating
            label="Communication"
            description="How easy was it to communicate with Trausti?"
            rating={reviewState.communicationRating}
            setRating={(rating) => handleRatingClick('communicationRating', rating)}
          />
          <Recommendation
            recommendation={reviewState.recommendation}
            setRecommendation={handleRecommendationClick}
          />
          <Praise
            traits={traits}
            setTraits={handleTraitsClick}
          />
        </div>
      </div>
    </>
  );
}
