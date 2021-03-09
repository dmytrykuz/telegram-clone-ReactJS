import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { UploadFiles as BaseUploadFiles } from "components";
import { attachmentsActions } from "redux/actions";

const UploadFiles = ({ attachments }) => {
  const [state, setState] = useState({
    previewTitle: "",
    previewImage: "",
    previewVisible: false,
    fileList: attachments,
  });

  useEffect(() => {
    setState({
      ...state,
      fileList: attachments,  
    })
  }, [attachments]);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCancel = () => setState({ ...state, previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const handleChange = ({ fileList }) => setState({ ...state, fileList });

  return (
    <BaseUploadFiles
      state={state}
      handleCancel={handleCancel}
      handlePreview={handlePreview}
      handleChange={handleChange}
    />
  );
};

UploadFiles.defaultProps = {
  attachments: [],
};

export default connect()(UploadFiles);
