import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function ControlledOpenSelect(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const check = (event) => {
        event.stopPropagation();
        console.log(event.target.id)
    }

    return (
        <>

            {props.view ? (<><div style={{ display: "flex" }}><h3>{props.index}</h3><h3 style={{ color: "orange" }}>{"|   "}</h3><h3>{props.title}</h3></div></>) : (<><h3>{props.index + ") " + props.title}</h3></>)}
            <FormControl className={classes.formControl} style={{ marginLeft: 30 }}>
                <InputLabel id="demo-controlled-open-select-label">choice</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={props.choice[0]}>{props.choice[0]}</MenuItem>
                    <MenuItem value={props.choice[1]}>{props.choice[1]}</MenuItem>
                    <MenuItem value={props.choice[2]}>{props.choice[2]}</MenuItem>
                </Select>
            </FormControl>
            <div></div>
            {(props.view) ? (<></>) : (<>
                <CreateIcon fontSize="large" id={props.index} onClick={props.editQuestion} style={{ color: "green", float: "center", clear: "both" }}>s</CreateIcon>
                <DeleteForeverIcon fontSize="large" id={props.index} onClick={props.deleteQuestion}></DeleteForeverIcon>
            </>)}
        </>
    );
}