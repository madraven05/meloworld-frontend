"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { FaArrowRight } from "react-icons/fa6";
import Card from "@/components/ui/card/card";
import Button from "@/components/ui/button/button";
import Table from "@/components/ui/table/table";
import { useRouter } from "next/navigation";
import { useAdminStore } from "@/components/stores/admin-store";

const OrganizationTable: React.FC = () => {
  const router = useRouter();
  const [loading] = useState(false);
  const { fetchOrganizations, organizations } = useAdminStore((state) => state);

  //TODO: Add fetch logic
  useEffect(() => {
    const fetchData = async () => {
      await fetchOrganizations();
    };
    fetchData();
    return () => {};
  }, []);

  //   useEffect(() => {
  //     if (assessments.length > 0) {
  //       setLoading(false);
  //     }
  //   }, [assessments]);

  const headings = ["Name", "Type", "Approve", "Status"];

  return (
    <Card className="flex bg-white flex-col items-start gap-5 p-5 justify-start w-full h-96">
      <div className="flex w-full justify-between items-center">
        <h2>Organizations</h2>
        <Button
          variant="outline"
          onClick={() => router.push("/admin/organizations")}
          size="xs"
          className="flex gap-2 items-center"
        >
          View More
          <FaArrowRight />
        </Button>
      </div>
      <Table headings={headings}>
        {loading
          ? // Show 5 rows with dynamic columns from headings
            Array.from({ length: 5 }).map((_, rowIdx) => (
              <tr key={rowIdx}>
                {headings.map((_, colIdx) => (
                  <td
                    key={colIdx}
                    className="px-6 py-4 border-y-2 border-gray-200 text-center"
                  >
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mx-auto" />
                  </td>
                ))}
              </tr>
            ))
          : organizations.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td>{row["organization_name"]}</td>
                <td>{row["organization_type"]}</td>
                <td>
                  <Switch
                    checked={row["is_approved"]}
                    onChange={() => {}}
                    className="group flex h-7 w-14 cursor-pointer rounded-full bg-secondary p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary/60"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-sky-900 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                    />
                  </Switch>
                </td>
                <td>
                  <Switch
                    checked={row["is_enabled"]}
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
  );
};

export default OrganizationTable;
