import React from 'react'
import { Upload } from 'antd'
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'
import { useState } from 'react'
import { Void } from '../../prelude/fp/function'
const U = Upload
export { U as Upload }

interface UploadProps extends React.ComponentProps<typeof Upload> { }

export interface SingleUploadProps
  extends Omit<UploadProps, 'fileList' | 'defaultFileList' | 'onChange'> {
  file?: UploadFile
  defaultFile?: UploadFile
  onChange?: Void<UploadFile | undefined>
}

export const SingleUpload: React.FC<SingleUploadProps> = ({
  file,
  defaultFile,
  onChange,
  ...rest
}) => {
  const fileList = file && [file]
  const defaultFileList = defaultFile && [defaultFile]
  const [fileListState, setFileListState] = useState(fileList || defaultFileList)
  const internalOnChange = ({ file }: UploadChangeParam<UploadFile>) => {
    const value = file.status === 'removed' ? undefined : file
    setFileListState(value && [value])
    onChange && onChange(value)
  }
  return <Upload {...rest} fileList={fileListState} onChange={internalOnChange} />
}
