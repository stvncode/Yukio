import React, {useState} from 'react'
import { Input, Upload, message } from 'antd'
import { Button } from '../../OwnComponents/button/Button'
import { useTranslator } from '../../hooks/use-translator'
import { AdminMsg } from './admin.msg'
import {css} from './admin.styles'
import { updateProfile } from '../../api/profile';
import { UploadOutlined } from '@ant-design/icons';

const dummyRequest = (file: any, onSuccess: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

export const AdminPage: React.FC = () => {
    const msg = useTranslator(AdminMsg)

    const [fN, setFN] = useState('')
    const [lN, setLN] = useState('')
    // const [selectedFileList, setSelectedFileList] = useState([])
    // const [selectedFile, setSelectedFile] = useState(null)
    
    //   const onChange = (info: any) => {
    //     const nextState = {selectedFileList, selectedFile};
    //     switch (info.file.status) {
    //       case "uploading":
    //         nextState.selectedFileList = [info.file];
    //         break;
    //       case "done":
    //         nextState.selectedFile = info.file;
    //         nextState.selectedFileList = [info.file];
    //         break;
    
    //       default:
    //         // error or removed
    //         nextState.selectedFile = null;
    //         nextState.selectedFileList = [];
    //     }
    //     setSelectedFile(() => nextState.selectedFile)
    //     setSelectedFileList(() => nextState.selectedFileList)
    //   };

    return (
        <div className={css.container}>
            <Input onChange={e => setFN(e.target.value)} name="types" value={fN} className={css.input}></Input>
            <Input onChange={e => setLN(e.target.value)} name="types" value={lN} className={css.input}></Input>
            <Button onClick={() => updateProfile({firstName: fN, lastName: lN})} className={css.button}>{msg.add}</Button>
            {/* <Upload
          fileList={selectedFileList}
          customRequest={dummyRequest}
          onChange={onChange}
        >
          <Button>Choose File</Button>
        </Upload>
        <br />
        <h3>Current State Log</h3> */}
        </div>
    )
}
