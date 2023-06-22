import { Select } from "antd";

const { Option } = Select;

interface Props {
  onSelectChange: (value: string) => void;
}

const SelectButton: React.FC<Props> = ({ onSelectChange }) => {
  return (
    <div>
      <Select
        defaultValue="Choose Language"
        style={{ width: 244 }}
        onChange={onSelectChange}
      >
        <Option value="english">English</Option>
        <Option value="chinese">中文</Option>
        <Option value="spanish">Español</Option>
        <Option value="french">Français</Option>
        <Option value="german">Deutsch</Option>
        <Option value="dutch">Nederlands</Option>
        <Option value="russian">Русский</Option>
        <Option value="japanese">日本語</Option>
        <Option value="korean">한국어</Option>
        <Option value="portuguese">Português</Option>
        <Option value="arabic">العربية</Option>
      </Select>
    </div>
  );
};

export default SelectButton;
