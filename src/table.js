import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((nameOne, nameTwo) => {
                  const name1 = nameOne.name.first;
                  const name2 = nameTwo.name.first;

                  if (name1 < name2) {
                    return -1;
                  }
                  if (name1 > name2) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              title
            </th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gender</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">cell</th>
            <th scope="col">city</th>
            <th scope="col">state</th>
            <th scope="col">country</th>
            <th scope="col">postcode</th>
            
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { city, state, country, postcode },
              picture: { thumbnail },
              cell,
              phone,
              gender,
              email,
              name: { first, last, title }
            }) => (
              <tr key={email}>
                <td>
                  <img src={thumbnail} />
                </td>
                <td>{title}</td>
                <th>{first}</th>
                <td>{last}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{cell}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{country}</td>
                <td>{postcode}</td>

                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;