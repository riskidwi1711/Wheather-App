import React from "react";
import { FaSun } from "react-icons/fa";
import { Awan } from "../../Assets";

function Main(props) {
  return (
    <div class="grid grid-cols-2 gap-4 justify-center items-center p-4">
      <div
        className="bg-yellow-200 bg-[url('/src/Assets/autumn.png')] bg-cover bg-no-repeat bg-center rounded-3xl p-4 flex flex-col justify-around"
        style={{ height: 300 + "px" }}
      >
        <div className="flex gap-2">
          <div
            className="bg-orange-600 p-2 rounded-full flex justify-center items-center"
            style={{ width: 45 + "px", height: 45 + "px" }}
          >
            <FaSun />
          </div>
          <div>
            <p className="text-lg font-bold">Weather</p>
            <p>Whats the weather</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-bold">20 C</p>
          <p>Rainy</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col text-white p-2 rounded-lg justify-center items-center gap-1 bg-slate-800">
            <p className="text-xs">Pressure</p>
            <p className="text-lg font-bold">800mb</p>
          </div>
          <div className="flex flex-col text-white p-2 rounded-lg justify-center items-center gap-1 bg-green-400">
            <p className="text-xs">Pressure</p>
            <p className="text-lg font-bold">800mb</p>
          </div>
          <div className="flex flex-col text-black p-2 rounded-lg justify-center items-center gap-1 bg-white">
            <p className="text-xs">Pressure</p>
            <p className="text-lg font-bold">800mb</p>
          </div>
        </div>
      </div>
      <div
        className="bg-yellow-200 bg-[url('/src/Assets/spring.png')] bg-cover bg-no-repeat bg-center rounded-3xl p-4 flex flex-col justify-around"
        style={{ height: 300 + "px" }}
      >
        <div className="flex gap-2">
          <div
            className="bg-orange-600 p-2 rounded-full flex justify-center items-center"
            style={{ width: 45 + "px", height: 45 + "px" }}
          >
            <FaSun />
          </div>
          <div>
            <p className="text-lg font-bold">Weather</p>
            <p>Whats the weather</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-bold">20 C</p>
          <p>Rainy</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col text-white p-2 rounded-lg justify-center items-center gap-1 bg-slate-800">
            <p className="text-xs">Pressure</p>
            <p className="text-lg font-bold">800mb</p>
          </div>
          <div className="flex flex-col text-white p-2 rounded-lg justify-center items-center gap-1 bg-green-400">
            <p className="text-xs">Pressure</p>
            <p className="text-lg font-bold">800mb</p>
          </div>
          <div className="flex flex-col text-black p-2 rounded-lg justify-center items-center gap-1 bg-white">
            <p className="text-xs">Pressure</p>
            <p className="text-lg font-bold">800mb</p>
          </div>
        </div>
      </div>
      <div className="" style={{ height: 300 + "px" }}>
        <p className="text-3xl font-bold">
          How’s the
          <br /> temperature today
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2" style={{ height: 300 + "px" }}>
        <div
          className="bg-yellow-200 rounded-2xl p-4 flex flex-col justify-between"
          style={{ height: 300 + "px", width: 250 + "px" }}
        >
          <div>
            <p>Tommorow</p>
            <p className="text-2xl font-bold">Jakarta, Indonesia</p>
          </div>
          <div className="flex gap-4">
            <img src={Awan} alt="" style={{ width: 70 + "px", height: 54+'px' }} />
            <div>
              <p className="text-2xl font-bold">20 C</p>
              <p className="text-lg font-normal">Rainy</p>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-200 rounded-2xl p-4 flex flex-col justify-between"
          style={{ height: 300 + "px", width: 250 + "px" }}
        >
          <div>
            <p>Tommorow</p>
            <p className="text-2xl font-bold">Jakarta, Indonesia</p>
          </div>
          <div className="flex gap-4">
            <img src={Awan} alt="" style={{ width: 70 + "px", height: 54+'px' }} />
            <div>
              <p className="text-2xl font-bold">20 C</p>
              <p className="text-lg font-normal">Rainy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
