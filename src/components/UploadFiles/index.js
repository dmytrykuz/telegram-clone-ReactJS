import React from "react";
import { Upload, Modal } from "antd";

const UploadFiles = ({ state, handleCancel, handlePreview, handleChange }) => {
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={state.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      ></Upload>
      <Modal
        visible={state.previewVisible}
        title={state.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={state.previewImage} />
      </Modal>
    </>
  );
};

export default UploadFiles;
