import Menu from "@/components/menu";
import { useGetUsersQuery } from "@/services/user";
import React from "react";

const Customer = () => {
  const { data, error, isLoading } = useGetUsersQuery("/users");

  return (
    <>
      <Menu />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>E-Mail</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
          {isLoading
        ? "Loading..."
        : data.data?.map((k: any, i:number) => {
            return (
              <>
              <tr key={i}>
                <td>{i+1}</td>
                <td>
                  {k.firstName}
                </td>
                <td>
                  {k.lastName}
                </td>
                <td>
                  {k.email}
                </td>
                <td>
                  {k.role}
                </td>
              </tr>
              </>
            );
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customer;
