"use client";
import { Patient, Therapist } from "@/components/types";
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
import Table from "@/components/ui/table/table";
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { MdOutlineEventNote, MdOutlineSick } from "react-icons/md";
import { TbInfoCircle, TbMoodSick } from "react-icons/tb";

const therapist: Therapist = {
  therapist_id: 1,
  user_id: null,
  email: "test@melo.com",
  password: "test@1234",
  therapist_name: "Dr. Smith",
  dob: "1980-01-01T00:00:00.000Z",
  license_number: "LIC-001",
  specializations: '{"anxiety","stress"}',
  assigned_user_ids: [1, 2, 3],
  metadata: null,
  created_at: "2025-05-16T07:59:13.550Z",
  updated_at: "2025-05-16T07:59:13.550Z",
};

const PatientPage = () => {
  const [patients, setPatients] = useState<Patient[]>([
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
  ]);

  useEffect(() => {
    // TODO: get patient data from API
  }, []);
  return (
    <div className="dashboard-panel">
      <h1>Your patients</h1>
      <div className="flex flex-wrap gap-8 mt-5 w-full">
        {patients.map((p) => (
          <div className="w-72 hover:-translate-y-1 hover:scale-110 transition duration-300">
            <Card className="relative p-5 mt-2  flex flex-col gap-5 bg-white/60">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="absolute right-6 top-6 hover:cursor-pointer hover:text-primary">
                    <TbInfoCircle className="text-xl" />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {`${p.first_name + " " + p.last_name}`}
                      <hr />
                    </DialogTitle>
                    <DialogDescription>
                      <div className="w-full h-full">
                        <div className="my-5">
                          <h3 className="flex items-center gap-1">
                            <MdOutlineEventNote /> History
                          </h3>
                          <div className="ml-5 mt-1">
                            <h4 className="flex font-semibold text-sm items-center gap-1">
                              <TbMoodSick /> Allergies
                            </h4>
                            <p>
                              {p.history.allergies.length > 0
                                ? p.history.allergies.join(", ")
                                : "None"}
                            </p>

                            <h4 className="flex font-semibold text-sm items-center gap-1">
                              <IoCalendar /> Past conditions
                            </h4>
                            <p>
                              {p.history.past_conditions.length > 0
                                ? p.history.past_conditions.join(", ")
                                : "None"}
                            </p>
                          </div>
                        </div>
                        <div className="mb-5">
                          <h3 className="flex items-center gap-1">
                            <MdOutlineSick /> Symptoms
                          </h3>
                          <p>
                            {p.symptoms.length > 0
                              ? p.symptoms.join(", ")
                              : "None"}
                          </p>
                        </div>
                        <hr />
                        <div className="mt-5">
                          <div className="mt-2">
                            <h3>Progress</h3>
                            <div className="flex flex-col gap-3">
                              <div>
                                <p className="font-semibold">Status</p>
                                <p>{p.progress.status}</p>
                              </div>
                              <div>
                                <p className="font-semibold">Notes</p>
                                <p className="text-xs">{p.progress.notes}</p>
                              </div>
                              <div>
                                <p className="font-semibold">Last updated</p>
                                <p className="text-xs">
                                  {p.progress.last_update}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
              <h3>{`${p.first_name + " " + p.last_name}`}</h3>
              <hr />
              <div>
                <h3 className="flex items-center gap-1">
                  <MdOutlineEventNote /> History
                </h3>
                <div className="ml-5 mt-1">
                  <h4 className="flex font-semibold text-sm items-center gap-1">
                    <TbMoodSick /> Allergies
                  </h4>
                  <p>
                    {p.history.allergies.length > 0
                      ? p.history.allergies.join(", ")
                      : "None"}
                  </p>

                  <h4 className="flex font-semibold text-sm items-center gap-1">
                    <IoCalendar /> Past conditions
                  </h4>
                  <p>
                    {p.history.past_conditions.length > 0
                      ? p.history.past_conditions.join(", ")
                      : "None"}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-1">
                  <MdOutlineSick /> Symptoms
                </h3>
                <p>{p.symptoms.length > 0 ? p.symptoms.join(", ") : "None"}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientPage;
