import { Select, MenuItem } from "@mui/material";

interface Props {
  onSelectChange: (value: string) => void;
  defaultLanguage: string;
}

const SelectButton: React.FC<Props> = ({ onSelectChange, defaultLanguage }) => {
  return (
    <div>
      <Select
        defaultValue={defaultLanguage}
        style={{ width: 244 }}
        onChange={(event) => onSelectChange(event.target.value)}
      >
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="chinese">中文</MenuItem>
        <MenuItem value="spanish">Español</MenuItem>
        <MenuItem value="french">Français</MenuItem>
        <MenuItem value="german">Deutsch</MenuItem>
        <MenuItem value="dutch">Nederlands</MenuItem>
        <MenuItem value="russian">Русский</MenuItem>
        <MenuItem value="japanese">日本語</MenuItem>
        <MenuItem value="korean">한국어</MenuItem>
        <MenuItem value="portuguese">Português</MenuItem>
        <MenuItem value="arabic">العربية</MenuItem>
      </Select>
    </div>
  );
};

export { SelectButton };
