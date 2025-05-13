"use client";

import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import Input from "@/components/ui/input/input";
import React, { useState } from "react";
import { FiSettings, FiEdit, FiSave } from "react-icons/fi";

const OrgSettingPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [orgData, setOrgData] = useState({
    name: "Acme Corporation",
    email: "contact@acme.com",
    phone: "+1-800-123-4567",
    address: "123 Main Street, Springfield, USA",
    description: "Leading provider of innovative solutions since 1999.",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setOrgData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic goes here. For now, we log the data to the console.
    console.log("Saving org data:", orgData);
  };

  return (
    <div className="dashboard-panel">
      <div className="max-w-4xl w-full mx-auto">
        <Card className="w-full bg-white/70 shadow-lg rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="flex items-center gap-2 text-3xl font-semibold">
              <FiSettings /> Settings
            </h1>
            <Button
              variant="outline"
              size="xs"
              onClick={isEditing ? handleSave : handleEditToggle}
            >
              {isEditing ? (
                <FiSave className="mr-1" />
              ) : (
                <FiEdit className="mr-1" />
              )}
              {isEditing ? "Save" : "Edit"}
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Organization Name</h3>
              {isEditing ? (
                <Input
                  type="text"
                  name="name"
                  value={orgData.name}
                  onChange={handleChange}
                />
              ) : (
                <p className="">{orgData.name}</p>
              )}
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Email</h3>
              {isEditing ? (
                <Input
                  type="email"
                  name="email"
                  value={orgData.email}
                  onChange={handleChange}
                />
              ) : (
                <p className="">{orgData.email}</p>
              )}
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Phone</h3>
              {isEditing ? (
                <Input
                  type="text"
                  name="phone"
                  value={orgData.phone}
                  onChange={handleChange}
                />
              ) : (
                <p className="">{orgData.phone}</p>
              )}
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Address</h3>
              {isEditing ? (
                <Input
                  type="text"
                  name="address"
                  value={orgData.address}
                  onChange={handleChange}
                />
              ) : (
                <p className="">{orgData.address}</p>
              )}
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Description</h3>
              {isEditing ? (
                <textarea
                  name="description"
                  value={orgData.description}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                />
              ) : (
                <p className="">{orgData.description}</p>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrgSettingPage;
