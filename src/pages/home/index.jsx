import { DatePicker } from 'antd';

function Home() {
  function handleDatePickerChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      <DatePicker onChange={handleDatePickerChange} />
      <ul><li>1</li></ul>
    </div>
  );
}

export default Home;
