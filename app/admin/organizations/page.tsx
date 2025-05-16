"use client";

import { useAuthStore } from "@/components/stores/auth-store";
import { Assessment } from "@/components/types";
import Card from "@/components/ui/card/card";
import MultiSelect from "@/components/ui/multiselect/multiselect";
import Table from "@/components/ui/table/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";
import { getAllAssessments } from "@/services/assessments";
import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";

const OrganizationPanel = () => {
  const token = useAuthStore((s) => s.token);
  const [scales, setScales] = useState<Assessment[]>();
  const [selectedScales, setSelectedScales] = useState<
    Record<number, string[]>
  >({});

  const [organizations] = useState<Record<string, any>[]>([
    {
      id: 1,
      name: "ABC Corporated",
      candidates: 214,
      status: "approved",
    },
    {
      id: 2,
      name: "XYZ Pvt Ltd.",
      candidates: 172,
      status: "approved",
    },
    {
      id: 3,
      name: "Your Health",
      candidates: 53,
      status: "disapproved",
    },
  ]);

  useEffect(() => {
    const fetchScales = async () => {
      if (token) {
        const response = await getAllAssessments(token);
        if (response.ok) {
          const data = await response.json();
          setScales(data["courses"]);
        }
      }
    };

    fetchScales();
  }, []);

  const handleScaleChange = (orgId: number, values: string[]) => {
    setSelectedScales((prev) => ({
      ...prev,
      [orgId]: values,
    }));
  };

  const headings = ["Name", "Candidates", "Status"];

  return (
    <div className="dashboard-panel">
      <div className="flex flex-col gap-4">
        <h1>Organization</h1>
        <Tabs defaultValue="orgs">
          <TabsList>
            <TabsTrigger value="orgs" className="flex-1">
              Organizations
            </TabsTrigger>
            <TabsTrigger value="scales" className="flex-1">
              Assign Scales
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scales">
            <Card className="p-5 bg-white/60 flex flex-col gap-5">
              <h2>Assign Scales</h2>
              <Table headings={["Name", "Scales"]}>
                {organizations.map((org) => (
                  <tr key={org.id}>
                    <td>{org.name}</td>
                    <td>
                      <MultiSelect
                        selected={selectedScales[org.id] || []}
                        onChange={(values) => handleScaleChange(org.id, values)}
                        placeholder="Select Scales"
                        items={
                          scales?.map((s) => ({
                            value: s.title.toLowerCase(),
                            label: s.title,
                          })) || []
                        }
                      />
                    </td>
                  </tr>
                ))}
              </Table>
            </Card>
          </TabsContent>
          <TabsContent value="orgs">
            <Card className="flex bg-white/60 flex-col items-start gap-5 p-5 justify-start w-full h-96">
              <div className="flex w-full justify-between items-center">
                <h2>Organizations</h2>
              </div>
              <Table headings={headings}>
                {organizations.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    <td>{row["name"]}</td>
                    <td>{row["candidates"]}</td>
                    <td>
                      <Switch
                        checked={row["status"] == "approved"}
                        onChange={() => {}}
                        className="group flex h-7 w-14 cursor-pointer rounded-full bg-secondary p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary/60"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-sky-900 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                        />
                      </Switch>
                    </td>
                  </tr>
                ))}
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrganizationPanel;
