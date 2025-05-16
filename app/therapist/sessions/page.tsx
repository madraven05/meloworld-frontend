"use client";

import Button from "@/components/ui/button/button";
import Card from "@/components/ui/card/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import Input from "@/components/ui/input/input";
import Select from "@/components/ui/select/select";
import React from "react";
import { BsHeadsetVr, BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const sessionData = [
  {
    session_id: 1,
    patient_id: 2,
    therapist_id: 1,
    content_id: null,
    session_status: "Completed",
    start_time: "2025-03-26T10:00:00.000Z",
    end_time: "2025-03-26T11:30:00.000Z",
    created_at: "2025-05-05T19:55:58.015Z",
    updated_at: "2025-05-05T19:56:25.494Z",
    metadata: {
      completion_feedback: "Patient responded well to therapy.",
    },
    patient_user_id: 1,
    therapist_user_id: null,
  },
  {
    session_id: 2,
    patient_id: 1,
    therapist_id: 1,
    content_id: 101,
    session_status: "Upcoming",
    start_time: "2025-04-26T10:00:00.000Z",
    end_time: "2025-04-26T11:30:00.000Z",
    created_at: "2025-02-01T10:00:00.000Z",
    updated_at: "2025-02-01T10:00:00.000Z",
    metadata: {
      completion_feedback: "N/A",
    },
    patient_user_id: 2,
    therapist_user_id: 1,
  },
  {
    session_id: 3,
    patient_id: 3,
    therapist_id: 1,
    content_id: 102,
    session_status: "Completed",
    start_time: "2025-01-26T10:00:00.000Z",
    end_time: "2025-01-26T11:30:00.000Z",
    created_at: "2024-12-05T19:55:58.015Z",
    updated_at: "2024-12-05T19:56:25.494Z",
    metadata: {
      completion_feedback: "Patient reported improvement.",
    },
    patient_user_id: 3,
    therapist_user_id: 1,
  },
];

const patientData = [
  {
    patient_id: 1,
    user_id: 1,
    symptoms: ["headache", "fatigue", "dizziness"],
    progress: {
      notes: "Symptoms are not worsening.",
      status: "stable",
      last_update: "2025-03-25",
    },
    history: {
      allergies: ["penicillin"],
      past_conditions: ["asthma"],
      hospitalized_before: false,
    },
    created_at: "2025-05-05T19:04:00.674Z",
    updated_at: "2025-05-05T19:04:00.674Z",
    metadata: null,
    first_name: "Test",
    last_name: "User",
    email: "test1@melo.com",
  },
  {
    patient_id: 2,
    user_id: 2,
    symptoms: ["nausea", "shortness of breath"],
    progress: {
      notes: "Under observation.",
      status: "improving",
      last_update: "2025-04-20",
    },
    history: {
      allergies: [],
      past_conditions: ["diabetes"],
      hospitalized_before: true,
    },
    created_at: "2025-05-06T10:00:00.000Z",
    updated_at: "2025-05-06T10:00:00.000Z",
    metadata: null,
    first_name: "Alice",
    last_name: "Smith",
    email: "test2@melo.com",
  },
  {
    patient_id: 3,
    user_id: 3,
    symptoms: ["back pain", "insomnia"],
    progress: {
      notes: "Further tests required.",
      status: "critical",
      last_update: "2025-04-15",
    },
    history: {
      allergies: ["gluten"],
      past_conditions: ["migraine"],
      hospitalized_before: false,
    },
    created_at: "2025-05-07T14:30:00.000Z",
    updated_at: "2025-05-07T14:30:00.000Z",
    metadata: null,
    first_name: "Bob",
    last_name: "Johnson",
    email: "test3@melo.com",
  },
];

const getPatientDetails = (patientId: number) => {
  return patientData.filter((p) => p.patient_id == patientId)[0];
};

const SessionsPage = () => {
  return (
    <div className="dashboard-panel relative">
      <div className="w-full flex justify-between">
        <h1>Your Sessions</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <FaPlus />
              <p className="hidden lg:block">Create New</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new session</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-5 w-full h-full">
                  <div>
                    <label htmlFor="date" className="text-base font-semibold">
                      Date
                    </label>
                    <Input id="date" type="datetime-local" />
                  </div>
                  <div className="w-full flex flex-col">
                    <label
                      htmlFor="patient"
                      className="text-base font-semibold"
                    >
                      Patient
                    </label>
                    <Select
                      items={patientData.map((p) => ({
                        label: p.first_name + " " + p.last_name,
                        value: p.patient_id.toString(),
                      }))}
                      value="0"
                      onValueChange={() => {}}
                    />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <div className="w-full flex gap-2">
                <Button size="xs">Create</Button>
                <Button size="xs" variant="outline">Cancel</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <h2>Upcoming</h2>
      <div className="flex flex-wrap gap-8">
        {sessionData
          .filter((s) => s.session_status == "Upcoming")
          .map((s) => (
            <div className="w-60 hover:scale-110 transition duration-300 ease-in-out">
              <Card className="p-5 w-full bg-white/60">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <BsHeadsetVr className="text-7xl" />
                  <h3>{new Date(s.start_time).toLocaleString()}</h3>
                  <p>
                    Duration:{" "}
                    {(() => {
                      const start = new Date(s.start_time);
                      const end = new Date(s.end_time);
                      const diff = end.getTime() - start.getTime();
                      const diffHours = Math.floor(diff / (1000 * 60 * 60));
                      const diffMinutes = Math.floor(
                        (diff % (1000 * 60 * 60)) / (1000 * 60)
                      );
                      return `${diffHours} hrs ${diffMinutes} mins`;
                    })()}
                  </p>
                  <p>
                    with{" "}
                    <span className="font-semibold">
                      {getPatientDetails(s.patient_id).first_name}
                    </span>
                  </p>
                </div>
              </Card>
            </div>
          ))}
      </div>
      <h2>Completed</h2>
      <div className="flex flex-wrap gap-8">
        {sessionData
          .filter((s) => s.session_status == "Completed")
          .map((s) => (
            <div className="w-60 hover:scale-110 transition duration-300 ease-in-out">
              <Card className="p-5 w-full bg-white/60">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <BsHeadsetVr className="text-7xl" />
                  <h3>{new Date(s.start_time).toLocaleString()}</h3>
                  <p>
                    Duration:{" "}
                    {(() => {
                      const start = new Date(s.start_time);
                      const end = new Date(s.end_time);
                      const diff = end.getTime() - start.getTime();
                      const diffHours = Math.floor(diff / (1000 * 60 * 60));
                      const diffMinutes = Math.floor(
                        (diff % (1000 * 60 * 60)) / (1000 * 60)
                      );
                      return `${diffHours} hrs ${diffMinutes} mins`;
                    })()}
                  </p>
                  <p>
                    with{" "}
                    <span className="font-semibold">
                      {getPatientDetails(s.patient_id).first_name}
                    </span>
                  </p>
                </div>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SessionsPage;
