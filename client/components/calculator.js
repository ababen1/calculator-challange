import { MenuItem, TextField, Select, Button, InputLabel, FormControl } from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import { useState } from "react";

export default function Calculator() {

    const [operation, setOperation] = useState("+");
    const [firstParam, setFirstParam] = useState("");
    const [secondParam, setSecondParam] = useState("");
    const [result, setResult] = useState("");

    const HandleSubmit = function (event) {
        event.preventDefault();

        if (GetTargetAPI(operation) !== undefined) {
            const targetURL = "http://localhost:8080" + GetTargetAPI(operation);
            const configs = {
                method: "POST",
                url: targetURL,
                data: {
                    "operatorA": firstParam,
                    "operatorB": secondParam,
                },
            }
            axios(configs)
                .then(res => {
                    if (res.data.error) {
                        alert(res.data.error);
                    } else {
                        setResult(res.data.result);
                    }
                })
                .catch(error => { console.log(error) })
        }
    }

    const GetTargetAPI = function (operation) {
        switch (operation) {
            case '+':
                return '/add';
            case '-':
                return '/sub';
            case '*':
                return '/multiply';
            case '/':
                return '/divide';
            default:
                return undefined;
        }
    }

    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <Stack spacing={2} direction={"row"}>
                    <TextField
                        id="firstParam"
                        value={firstParam}
                        onChange={e => setFirstParam(e.target.value)}
                        variant="outlined"
                        type={"number"}
                        step={"any"}
                        label="Operator A"></TextField>

                    <FormControl style={{"width": "5rem"}}>
                        <InputLabel id="demo-simple-select-label">Operation</InputLabel>
                        <Select
                            label="Operation"
                            value={operation}
                            onChange={e => setOperation(e.target.value)}>
                            <MenuItem id="add" value="+">+</MenuItem>
                            <MenuItem id="sub" value="-">-</MenuItem>
                            <MenuItem id="multiply" value="*">*</MenuItem>
                            <MenuItem id="divide" value="/">/</MenuItem>
                        </Select>
                    </FormControl>
                <TextField
                    id="secondParam"
                    value={secondParam}
                    onChange={e => setSecondParam(e.target.value)}
                    variant="outlined"
                    type={"number"}
                    step={"any"}
                    label="Operator B"></TextField>
                <InputLabel variant="standard" disabled>=</InputLabel>
                <TextField
                    id="result"
                    value={result}
                    variant="standard"
                    label="Result"
                    disabled></TextField>
                <Button type="submit" variant="outlined">calculate</Button>
            </Stack>
        </form>
        </div >
    )
}