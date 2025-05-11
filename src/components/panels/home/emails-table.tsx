import React, { useState } from "react";
import Card from "../../ui/card/card";
import { Switch } from "@headlessui/react";
import Table from "../../ui/table/table";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../../ui/button/button";


const EmailsTable: React.FC = () => {
  const [loading] = useState(false);
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

  //TODO: Add fetch logic
  //   useEffect(() => {
  //     const fetchAssessments = async () => {
  //       if (token) {
  //         const response = await getAllAssessments(token);
  //         if (response.ok) {
  //           const data = await response.json();
  //           setTimeout(() => {
  //             setAssessments(data["courses"]);
  //           }, 2000);
  //         }
  //       }
  //     };

  //     fetchAssessments();

  //     return () => {};
  //   }, []);

  //   useEffect(() => {
  //     if (assessments.length > 0) {
  //       setLoading(false);
  //     }
  //   }, [assessments]);

  const headings = ["Name", "Candidates", "Status"];

  return (
    <Card className="flex bg-white flex-col items-start gap-5 p-5 justify-start w-full h-96">
      <div className="flex w-full justify-between items-center">
        <h2>Emails</h2>
        <Button size="xs" className="flex gap-2 items-center">
            View More
            <FaArrowRight/>
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
  );
};

export default EmailsTable;
