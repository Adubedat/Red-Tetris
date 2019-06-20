import React from "react";
import PropTypes from "prop-types";
import Input from "../common/Input";
import Button from "../common/Button";
import styles from "./styles";

const CreateRoomSub = ({ onSubmit, onChange, error, value, label }) => {
  return (
    <div style={styles.createRoomContainer}>
      <p>Create a new room to play with your friends (if you have any ...)</p>
      <form
        onSubmit={e => onSubmit(e)}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Input
          error={error.boolean}
          helperText={error.message}
          spellCheck="false"
          label={label}
          value={value}
          onChange={e => onChange(e)}
        />
        <Button disabled={!value || error.boolean} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

CreateRoomSub.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CreateRoomSub;
