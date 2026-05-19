'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import axios from "axios";
import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SkeletonInput: React.FC = () => (
  <div className="flex flex-col">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2 animate-pulse"></div>
    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
  </div>
);

const SkeletonSelect: React.FC = () => (
  <div className="flex flex-col">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2 animate-pulse"></div>
    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
  </div>
);

const SkeletonCheckboxGroup: React.FC = () => (
  <div className="flex flex-col">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2 animate-pulse"></div>
    <div className="grid grid-cols-2 gap-2">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="inline-flex items-center space-x-2">
          <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
);

const Preferences: React.FC = () => {
  const { data: session, status: _status } = useSession();
  const _router = useRouter();
  const [userPreferences, setUserPreferences] = useState({
    name: '',
    age: 0,
    goal: '',
    calorieRequirement: 0,
    proteinRequirement: 0,
    activityLevel: '',
    weight: 0,
    height: 0,
    workoutCommitment: 0,
    dietaryPreferences: [],
    preferredCuisines: [],
    allergies: []

  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false); // New state for saving status
  const [error, setError] = useState<string | null>(null);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  const fetchUserPreferences = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BACKEND_URL}/preferences`, {
        headers: {
          "user-id": session?.user?.id
        }
      });

      const data = response.data;
      data.goal = formatEnumString(data.goal)
      data.activityLevel = formatEnumString(data.activityLevel)
      setUserPreferences(response.data);
    } catch (err: any) {
      console.error('Error fetching user preferences', err);
      setError(err.message || 'Failed to load preferences.');
      toast.error("Failed to load preferences. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [session?.user?.id, BACKEND_URL]);

  // Get the info from the backend on mount
  useEffect(() => {
    fetchUserPreferences();
  }, [fetchUserPreferences]);

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm space-y-6 animate-fade-in">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkeletonInput />
          <SkeletonInput />
          <SkeletonSelect />
          <SkeletonInput />
          <SkeletonInput />
          <SkeletonSelect />
          <SkeletonInput />
          <SkeletonInput />
          <SkeletonInput />
        </div>
        <SkeletonCheckboxGroup />
        <SkeletonCheckboxGroup />
        <SkeletonCheckboxGroup />
        <div className="flex justify-center items-center mt-10">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full md:w-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-500 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">Error</h3>
        <p>{error}</p>
        <button
          onClick={fetchUserPreferences} // Retry fetching data
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          Try Again
        </button>
      </div>
    );
  }

  // --- Handlers for Form Changes ---

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserPreferences((prev) => ({
      ...prev,
      [name]: ['age', 'weight', 'height', 'calorieRequirement', 'proteinRequirement', 'workoutCommitment'].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleCheckboxChange = (key: 'dietaryPreferences' | 'allergies' | 'preferredCuisines') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      setUserPreferences((prev) => {
        const current = prev[key] || [];
        return {
          ...prev,
          [key]: checked ? [...current, value] : current.filter((item) => item !== value),
        };
      });
    };

  // --- Function to update preferences in DB via POST request ---
  const updateUserPreferences = async () => {
    setSaving(true); // Start saving
    try {
      const response = await axios.post(`${BACKEND_URL}/preferences`, userPreferences, {
        headers: {
          "user-id": session?.user?.id,
        }
      });
      console.log('Update response:', response.data);
      toast.success('Preferences saved successfully!');
    } catch (err: any) {
      console.error('Error saving user preferences', err);
      toast.error(`Failed to save preferences: ${err.response?.data?.message || err.message}`);
    } finally {
      setSaving(false); // End saving
    }
  };

  // Modified handleSave to call the new update function
  const handleSave = () => {
    console.log('Attempting to save preferences:', userPreferences);
    updateUserPreferences();
  };

  function formatEnumString(input: string): string {
    return input
      .toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }


  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Edit Your Preferences</h2>
      <p className="text-gray-500">Helps to chat more effectively with the Nutrition Coach</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Name" name="name" value={userPreferences.name} onChange={handleChange} />
        <InputField label="Age" name="age" type="number" value={userPreferences.age} onChange={handleChange} />

        <SelectField label="Goal" name="goal" value={userPreferences.goal} onChange={handleChange} options={['Weight Loss', 'Weight Gain', 'Muscle Gain',]} />
        <InputField label="Calories Goals (kcal per day)" name="calorieRequirement" type="number" value={userPreferences.calorieRequirement} onChange={handleChange} />
        <InputField label="Protein Goals (g per day)" name="proteinRequirement" type="number" value={userPreferences.proteinRequirement} onChange={handleChange} />
        <SelectField label="Activity Level" name="activityLevel" value={userPreferences.activityLevel} onChange={handleChange} options={['Active', 'Moderate', 'Less Active']} />

        <InputField label="Weight (kg)" name="weight" type="number" value={userPreferences.weight} onChange={handleChange} />

        <InputField
          label="Workout (days a week)"
          name="workoutCommitment"
          type="number"
          value={userPreferences.workoutCommitment}
          onChange={handleChange}
          min={0}
          max={7}
        />
      </div>

      {/* Dietary Preferences */}
      <CheckboxGroup
        label="Dietary Preferences"
        options={['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Eggetarian', 'Pescatarian']}
        selected={userPreferences.dietaryPreferences}
        onChange={handleCheckboxChange('dietaryPreferences')}
      />

      {/* Preferred Cuisines */}
      <CheckboxGroup
        label="Preferred Cuisines"
        options={['Indian', 'Mexican', 'Chinese', 'Italian', 'Thai', 'Japanese']}
        selected={userPreferences.preferredCuisines}
        onChange={handleCheckboxChange('preferredCuisines')}
      />

      {/* Allergies */}
      <CheckboxGroup
        label="Allergies"
        options={['Peanuts', 'Dairy', 'Gluten', 'Shellfish', 'Soy', 'Eggs']}
        selected={userPreferences.allergies}
        onChange={handleCheckboxChange('allergies')}
      />

      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleSave}
          disabled={saving} // Disable button while saving
          className="cursor-pointer w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all flex items-center justify-center"
        >
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} {/* Spinner on button */}
          {saving ? 'Saving...' : 'Save Preferences'}
        </button>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, value, type = 'text', onChange, min, max }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm text-gray-500 dark:text-gray-400 mb-2">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, options, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm text-gray-500 dark:text-gray-400 mb-2">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

interface CheckboxGroupProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, options, selected, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-500 dark:text-gray-400 mb-2">{label}</label>
    <div className="grid grid-cols-2 gap-2">
      {options.map((option) => (
        <label key={option} className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            value={option}
            checked={selected?.includes(option)}
            onChange={onChange}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <span className="text-gray-800 dark:text-white">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

export default Preferences;