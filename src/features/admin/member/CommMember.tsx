import React, { useEffect, useState } from "react";
import { Modal, Form } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import FilterSelect from "./components/FilterSelect";
import MemberTable from "./components/MemberTable";
import MemberForm from "./components/MemberForm";
import { memberAction } from "features/admin/member/memberReducer";
import { deleteMember, updateMember } from "./memberAPI";

/* eslint-disable */
const CommMember = () => {
  const dispatch = useDispatch();
  
  // const { memberList, memberListError, memberDetail, memberDetailError } = useSelector(
  //   ({ memberReducer }) => ({
  //     memberList: memberReducer.memberList,
  //     memberDetail: memberReducer.memberDetail,
  //   })
  // );

  const { memberList, memberDetail } = useSelector((state: any) => ({
    memberList: state.memberReducer.memberList,
    memberDetail: state.memberReducer.memberDetail
  }));

  useEffect(() => {
    dispatch(memberAction.getMemberList({ target: "memberList" }));
  }, []);
  
  const [visible, setVisible] = useState<boolean>(false);
  const [memberForm] = Form.useForm();

  const onClose = () => {
    setVisible(false);
  };

  const memberSelectHandler = (keys: string | number) => {
    dispatch(memberAction.getMember({ target: "memberDetail", memberKey: keys}));
    setVisible(true);
  };
  
  const [selectedFilter, setSelectedFilter] = useState<string | number>("all");
  const selectedFilterHandler = (values : string | number) => {
    setSelectedFilter(values);
  };

  const [keyword, setKeyword] = useState<string>("");

  // const searchHandler = (event: React.ChangeEvent<HTMLButtonElement>) => {
  //   const value = (event.target as HTMLInputElement).value
  //   setKeyword(value);
  //   if (selectedFilter && value) {
  //     dispatch(memberAction.getMemberList({target: "memberList", keyword: value, filterType: selectedFilter}));
  //   }
  // }
  const searchHandler = (word: string) => {
    setKeyword(word);
    if (selectedFilter && word) {
      dispatch(memberAction.getMemberList({target: "memberList", keyword: word, filterType: selectedFilter}));
    }
  }


  const resetHandler = (): void => {
    dispatch(memberAction.getMemberList({ target: "memberList" }));
    setSelectedFilter("all");
  }

  const memberDeleteHandler = (keys: string | number) => {
    Modal.confirm({
      title: "계정 삭제",
      content: "위 계정을 삭제하시겠습니까?",
      okText: "확인",
      cancelText: "취소",
      onOk: () => {
        try {
          deleteMember(keys).then(() => {
            if (keyword) {
              dispatch(memberAction.getMemberList({ target: "memberList", keyword: keyword, filterType: selectedFilter }));
            } else if (!keyword) {
              dispatch(memberAction.getMemberList({ target: "memberList" }));
            }            
          })
          onClose();
        } catch(e) {
          console.error(e);
        }
      }
    })
  };

  const memberUpdateHandler = (formData: {id: string | number}) => {
    Modal.confirm({
      title: "계정 수정",
      content: "위 계정을 수정하시겠습니까?",
      okText: "확인",
      cancelText: "취소",
      onOk: () => {
        try {
          updateMember(formData).then(() => {
            dispatch(memberAction.getMember({ target: "memberDetail", memberKey: formData.id}));
            if (keyword) {
              dispatch(memberAction.getMemberList({target: "memberList", keyword: keyword, filterType: selectedFilter}));
            } else if (!keyword) {
              dispatch(memberAction.getMemberList({target: "memberList"}));
            }            
          })
        } catch(e) {
          console.error(e);
        }
      }
    })

  };

  const filterList = [
    {
      key: 1,
      label: "전체",
      value: "all"
    }, {
      key: 2,
      label: "이메일",
      value: "email"
    }, {
      key: 3,
      label: "성명",
      value: "name"
    }, {
      key: 4,
      label: "기관",
      value: "orgn"
    }
  ];


  return (
    <>
      <FilterSelect
          filterList={filterList}
          selectedFilterKeys={selectedFilter}
          selectedFilterHandler={selectedFilterHandler}
          searchHandler={searchHandler}
      />
      <div>
        <SyncOutlined onClick={resetHandler} style={{float: "right", fontSize: "20px"}} />
        <MemberForm
            memberForm={memberForm}
            initialValues={memberDetail.data}
            visible={visible}
            onClose={onClose}
            // memberUpdateHandler={memberUpdateHandler}
            // memberDeleteHandler={memberDeleteHandler}
        />
        {/*<MemberTable*/}
        {/*    memberData={memberList.data}*/}
        {/*    memberSelectHandler={memberSelectHandler}*/}
        {/*/>*/}
      </div>
    </>
  );
};

export default CommMember;
