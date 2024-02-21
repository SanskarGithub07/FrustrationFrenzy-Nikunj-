"use client";
import Link from "next/link";
import { useState } from "react";
import DateInput from "./doctor_details/date/dates";
import TimeInput from "./doctor_details/time/time";
import ReactDatePicker from "react-datepicker";
import React from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import formbg from "../../public/footer_bg.png"
import Image from "next/image";
import Foooter from "./Foooter";
let aglePageKaData = {};
let docSchedule = [];
export default function Home() {
  const [value, onChange] = useState("10:00");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("8:00 AM");
  const [components, setComponents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    experience: "",
    about: "",
    schedules: [], // Maintain an array for schedules
  });
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    console.log(formData);

    // You can then use fetch or axios to send the file to your server
    // fetch('/api/upload', { method: 'POST', body: formData });
  };
  const handleClick = () => {
    setComponents((prevComponents) => [
      ...prevComponents,
      <ScheduleComponent key={prevComponents.length} />,
    ]);
  };

  function ScheduleComponent() {
    return (
      <div className="w-full flex flex-row my-4">
        <div className="mx-1">
          <DateInput />
        </div>
        <div className="mx-1">
          <TimeInput />
        </div>
      </div>
    );
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  function DateInput() {
    return (
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        isClearable
        placeholderText="Select a date"
        className="text-black p-2 rounded-lg "
      />
    );
  }
  function TimeInput() {
    return (
      <div>
        <TimePicker
          className="bg-white text-black "
          disableClock
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
  const handleAddSchedule = () => {
    if (selectedDate && value) {
      const newSchedule = {
        date: selectedDate,
        time: value,
      };

      setFormData((prevData) => ({
        ...prevData,
        schedules: [...prevData.schedules, newSchedule],
      }));

      // Clear selected date and time after adding a schedule
      setSelectedDate(null);
      setSelectedTime("8:00 AM");
    }
    return (
      <div>
        <div className="w-full flex flex-row">
          <div className="mx-1">
            <DateInput />
          </div>
          <div className="mx-1">
            <TimeInput />
          </div>
          <div className="m-auto">
            <div>
              <button
                onClick={() => {
                  handleAddSchedule();
                  handleClick();
                }}
                className="text-black"
              >
                Add
              </button>
              {components}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);

    // ... Rest of your submit logic
  };

  return (
    <div className="pt-4 bg-white-green">
      <div>
        <Image
          src={formbg}
          className="w-full absolute place-content-center m-0 p-0 top-30"
        />
      </div>
      <div className="bg-dark-green/20 backdrop-blur-lg backdrop-filter  w-2/5 rounded-3xl p-6 m-auto flex-col h-fit absolute left-0 right-0">
        <h1 className="text-dark-green text-center text-4xl font-bold font-crimson my-4 p-2">
          DOCTOR FORM
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-2"
        >
          <div className=" w-full">
            <label className="text-dark-green font-medium text-xl font-sans">
              Name
              <br />
              <input
                required
                autoComplete="off"
                className="p-1 rounded-lg text-black w-full font-normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className=" w-full">
            <label className="text-dark-green font-medium text-xl font-sans ">
              Expertise
              <br />
              <input
                required
                autoComplete="off"
                className="p-1 rounded-lg text-black w-full font-normal"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className=" w-full">
            <label className="text-dark-green font-medium text-xl font-sans">
              Experience
              <br />
              <input
                required
                autoComplete="off"
                className="p-1 rounded-lg text-black w-full font-normal"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className=" w-full">
            <label className="text-dark-green font-medium text-xl font-sans">
              About
              <br />
              <textarea
                required
                autoComplete="off"
                className="p-1 rounded-lg text-black w-full font-normal"
                name="about"
                value={formData.about}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="text-dark-green font-medium text-xl font-sans w-full">
            Add Certfication
          </div>
          <div className="w-full flex flex-row">
            <input
              type="file"
              className="p-1 rounded-lg text-black w-full font-normal"
              onChange={handleFileChange}
            />
            <button onClick={handleFileUpload}>Upload</button>
          </div>
          <div className="text-dark-green font-medium text-xl font-sans w-full">
            Add Schedule
          </div>
          <div className="w-full flex flex-row flex-wrap">
            <div className=" mx-1">
              <DateInput />
            </div>
            <div className="mx-1">
              <TimeInput />
            </div>
            <div className="m-auto">
              <div>
                <button
                  onClick={() => {
                    handleClick();
                    handleAddSchedule();
                  }}
                  className=" btn text-black"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="">{components}</div>
          </div>
          <Link
            href={{
              pathname: "/Components/doctor_details",
              query: { data: formData, docSchedule },
            }}
          >
          <div className="my-4">
            <button
              type="submit"
              className="btn btn-primary  bg-sec-red text-white-green w-60 hover:bg-primary-green"
              onClick={() => {
                aglePageKaData = formData;
                docSchedule = aglePageKaData.schedules;
                console.log(formData);
              }}
            >
              Submit
            </button>
          </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export { aglePageKaData };
export { docSchedule };
