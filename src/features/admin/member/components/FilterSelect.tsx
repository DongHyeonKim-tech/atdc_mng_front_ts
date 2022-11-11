import React, {useState} from "react";
import { Select } from "antd";
// import LimeButton from "features/common/button/components/LimeButton";

const { Option } = Select;

const FilterSelect = ({
  filterList,
  selectedFilterKeys,
  selectedFilterHandler,
  searchHandler,
} : {
    filterList: {[key: string]: string | number}[],
    selectedFilterKeys: string | number,
    selectedFilterHandler: (values: string | number) => void,
    searchHandler: (e: string) => void,
}) => {
    const [word, setWord] = useState("");

    const wordChange = (e: {target: {value: string}}) => {
        setWord(e.target.value);
    }

  return (
      <>
        <div className={"con-select"} style={{fontSize: "15px", marginBottom: "20px"}}>
          <span>검색 필터: </span>
          {filterList && (
            <Select
              defaultValue={filterList[0].label}
              style={{ width: 120 }}
              value={
                selectedFilterKeys ? selectedFilterKeys : filterList[0].value
              }
              onSelect={selectedFilterHandler}
            >
              {filterList.map((orgn) => (
                <Option key={orgn.value}>{orgn.label}</Option>
              ))}
            </Select>
          )}
        </div>
        <div className="content-detail" style={{height: "150px"}}>
            <div className="con-search">
                <label htmlFor="searchMember" className="hidden">회원 검색</label>
                    <input
                        type="text"
                        id="searchMember"
                        placeholder="회원 정보를 입력하세요."
                        onChange={wordChange}
                    />
            </div>
        <div className="content-button">
            <button title={"검색하기"} className={"primary"} value={word} onClick={() => searchHandler(word)}/>
        </div>
    </div>
  </>
  );
};

export default FilterSelect;
