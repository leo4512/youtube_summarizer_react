import MuiAlert from "@mui/material/Alert";

interface Message {
  message: string;
}

const AlterBox: React.FC<Message> = ({ message }) => {
  return (
    <div style={{ margin: "10px 0 10px 0" }}>
      <MuiAlert severity="error">{message}</MuiAlert>
    </div>
  );
};

export default AlterBox;
