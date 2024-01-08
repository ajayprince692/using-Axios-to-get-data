import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const res = await axios.get(API_URL);
      if (res.status === 200) {
        toast.success("Submitted Succesfully!");
        setData(res.data);
      }
    } catch (error) {
      toast.error("OOPS! your BAd");
      console.error("Error fetching Posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success("Data Deleted Successfully!");
        getBlogs();
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error("Error deleting Data:", error);
    }
  };

  const toggle = async (e) => {
    try {
      e.status = !e.status;
      const res = await axios.put(`${API_URL}/${e.id}`, e);
      if (res.status === 200) {
        toast.default("Status Changed!");
        getBlogs();
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.error("Error toggling blog status:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <TopBar />

        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.phone}</td>
                    <td>{e.website}</td>
                    <td>{e.company}</td>
                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          defaultChecked={e.status}
                          onChange={() => toggle(e)}
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <Button
                        variant="info"
                        onClick={() => navigate(`/edit/${e.id}`)}
                      >
                        Edit
                      </Button>
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(e.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
