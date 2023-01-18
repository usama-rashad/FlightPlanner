import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./AirlineViewer.scss";

// Interfaces
export interface IAirlineInfo {
  id: number;
  airlineName: string;
  airlineHub: string;
  airlineIcon: string;
}

// Imports
import axios from "axios";
import { flexbox } from "@mui/system";
import LabelWithEdit from "../LabelWithEdit/LabelWithEdit";

const deleteIconStyles = {
  color: "red",
  cursor: "pointer",
  opacity: 0.2,
  "&:hover": { opacity: 1.0 },
};

const editIconStyles = {
  color: "darkslateblue",
  cursor: "pointer",
  opacity: 0.2,
  "&:hover": { opacity: 1.0 },
};

function AirlineViewer() {
  const [airlineData, setAirlineData] = useState<IAirlineInfo[]>();
  const [selectedRow, setSelectedRow] = useState<number>(0);
  // Airline data store
  const readAirline = async () => {
    let dataRead: IAirlineInfo[];
    const options = {
      url: "http://localhost:5000/api/v1/viewAirlines",
      method: "get",
    };
    await axios(options)
      .then((data) => {
        dataRead = data.data as IAirlineInfo[];
        setAirlineData(dataRead);
      })
      .catch((error) => {
        setAirlineData([]);
      });
  };

  // Action for row select
  const dataRowSelected = (id: number) => {
    setSelectedRow(id);
  };

  return (
    <div className="airlineViewer">
      <h3>Browse Airlines</h3>
      <button onClick={readAirline}>Read airlines</button>
      <TableContainer component={Paper} sx={{ maxwidth: 650 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, width: 10 }}>ID</TableCell>
              <TableCell sx={{ fontWeight: 600, width: 100 }}>
                Airline Name
              </TableCell>
              <TableCell sx={{ fontWeight: 600, width: 100 }}>
                Airline Hub
              </TableCell>
              <TableCell sx={{ fontWeight: 600, width: 100 }}>
                Airline Icon
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {airlineData?.map((airline) => {
              return (
                <TableRow key={airline.id} sx={{}}>
                  <TableCell>
                    <div className="cell">
                      <div className="left">
                        <Typography>{airline.id}</Typography>
                      </div>
                      <div className="right">
                        <DeleteForeverOutlinedIcon sx={deleteIconStyles} />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="cell">
                      <LabelWithEdit label={airline.airlineName} />
                      <div className="left">
                        <Typography>{airline.airlineName}</Typography>
                      </div>
                      <div className="right">
                        <EditOutlinedIcon sx={editIconStyles} />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="cell">
                      <div className="left">
                        <Typography>{airline.airlineHub}</Typography>
                      </div>
                      <div className="right">
                        <EditOutlinedIcon sx={editIconStyles} />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="cell">
                      <div className="left">
                        <Typography>{airline.airlineIcon}</Typography>
                      </div>
                      <div className="right">
                        <EditOutlinedIcon sx={editIconStyles} />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AirlineViewer;
