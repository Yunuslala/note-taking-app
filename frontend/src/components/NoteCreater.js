import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorToast, SuccessToast } from "./Popup";
import NotesForm from "./NoteForm";
import NotePreview from "./NotePreview";

const NoteCreater = () => {
  const url = "http://localhost:4500";
  const { id } = useParams();
  const [NoteInfo, setNoteInfo] = useState({});
  const [flag, setFlag] = useState(false);
  const token = localStorage.getItem("noteToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      ErrorToast("You Are not Authorised User Go for Login");
      navigate("/");
    }

    if (id) {
      getResumeData();
    }
  }, [id, flag]);
  const getResumeData = async () => {
    const { data } = await axios.get(`${url}/api/notes/${id}`, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    if (data.success) {
      setNoteInfo(data.data);
    } else {
      ErrorToast(data?.response?.data?.msg);
    }
  };
  const validateResumeData = () => {
    if (!NoteInfo.topic || !NoteInfo.description) {
      return "Please fill out all Note information fields.";
    }
    return null; // No errors
  };

  const handleSaveResume = async () => {
    const validationError = validateResumeData();

    if (validationError) {
      ErrorToast(validationError);
      return;
    }

   

    try {
      if (id) {
        const { data } = await axios.patch(
          `${url}/api/notes/${id}`,
          NoteInfo,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        if (data.success) {
          SuccessToast(data.msg);
          setFlag((prev) => !prev);
        } else {
          ErrorToast(data.response.data.msg);
        }
      } else {
        const { data } = await axios.post(`${url}/api/notes`, NoteInfo, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        if (data.success) {
          SuccessToast(data.msg);
        } else {
          ErrorToast(data.response.data.msg);
        }
      }
    } catch (error) {
      ErrorToast(error.response.data.msg);
    }
  };

  return (
    <div className="w-full max-w-4xl mt-10 mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
        Create Notes
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <NotesForm setNoteInfo={setNoteInfo} NoteInfo={NoteInfo} />
        </div>
        <div className="w-full flex flex-col items-center">
          <NotePreview NoteInfo={NoteInfo} />
          <button
            onClick={handleSaveResume}
            className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            {id ? "Edit Note" : "Save Note"}
          </button>
          <p className="mt-4">See All Your <span onClick={()=>navigate('/dashboard')} className="cursor-pointer hover:border-b hover:border-b-blue-400 hover:text-blue-700">Notes</span> </p>
        </div>
      </div>
    </div>
  );
};

export default NoteCreater;
