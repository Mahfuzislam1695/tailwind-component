import React from "react";

const ProfileDetails = () => {
  return (
    <div className="w-full py-8 px-8 bg-white rounded-xl shadow-lg divide-y  divide-gray-700">
      <p className="text-left">Profile</p>
      <div className="">
        <div className="grid grid-cols-6 gap-6 mt-2">
          <div className="col-span-3 ">
            <label
              for="first-name"
              className="block text-sm font-medium text-left"
            >
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-0.5 block w-full rounded border border-gray-500 py-1.5 px-2 shadow-sm    placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>

          <div className="col-span-3 ">
            <label
              for="last-name"
              className="block text-sm font-medium text-left"
            >
              Last Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-0.5 block w-full rounded border border-gray-500 py-1.5 px-2 shadow-sm    placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>

          <div className="col-span-3 ">
            <label
              for="last-name"
              className="block text-sm font-medium text-left"
            >
              Email
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-0.5 block w-full rounded border border-gray-500 py-1.5 px-2 shadow-sm    placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>

          <div className="col-span-3 ">
            <label
              for="last-name"
              className="block text-sm font-medium text-left"
            >
              Phone
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-0.5 block w-full rounded border border-gray-500 py-1.5 px-2 shadow-sm    placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>

          <div className="col-span-3 ">
            <label
              for="last-name"
              className="block text-sm font-medium text-left"
            >
              Password
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-0.5 block w-full rounded border border-gray-500 py-1.5 px-2 shadow-sm    placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>

          <div className="col-span-3 ">
            <label
              for="last-name"
              className="block text-sm font-medium text-left"
            >
              Account Number
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-0.5 block w-full rounded border border-gray-500 py-1.5 px-2 shadow-sm    placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>

          <div className="col-span-6 ">
            <label
              for="last-name"
              className="block text-sm font-medium text-left"
            >
              Api Key
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              className="mt-0.5 block w-full rounded border border-gray-500 py-1.5 px-2 shadow-sm    placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-200"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button className="border py-1 px-1">PUSH ACCOUNT</button>
          <button className="border py-1 px-1">DELETE ACCOUNT</button>
          <button className="border py-1 px-1">UPDATE DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
