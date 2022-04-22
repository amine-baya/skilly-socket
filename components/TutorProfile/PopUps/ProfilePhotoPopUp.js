import React, { useState } from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import WhatsAppTree from '../../../icons/WhatsAppTree'
import { openPopUps } from '../../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'
import Dropzone, { useDropzone } from 'react-dropzone'

const ProfilePhotoPopUp = () => {
  // top open and close popup
  const [profilePopUp, setProfilePopUp] = useRecoilState(openPopUps)

  // image
  const [profile_img, set_profile_img] = useState(new FormData())
  const [image, setImage] = useState({ preview: '', raw: '' })

  const handleDrop = async (acceptedFiles) => {
    let data = new FormData()
    data.append('profile_pic', acceptedFiles[0], acceptedFiles[0].name)
    const response = await Server.post(uploadUserProfilePic, data)
    if (response.success) {
      profile_img.set('profile_pic', acceptedFiles[0])

      console.log(profile_img)
      set_profile_img(profile_img)
    }
  }
  const handleFileChange = (e) => {
    console.log(e.target.value)
    // console.log('e', e.target.value)
    // if (e.target.files.length) {
    //   setImage({
    //     preview: URL.createObjectURL(e.target.files[0]),
    //     raw: e.target.files[0],
    //   })
    //   profile_img.set('profile_pic', e.target.files[0])
    //   set_profile_img(profile_img)
    //   console.log(profile_img)
    // }
  }
  // uploading files
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
      profile_img.set('profile_pic', acceptedFiles[0])
      set_profile_img(profile_img)
      console.log(profile_img)
    },
  })

  // Upload Box
  const UploadBox = () => {
    return (
      <div className="flex h-[200px] w-[200px] items-center justify-center border-[0.8px] border-dashed border-[#7E7E7E] lg:h-[240px] lg:w-[240px]">
        <div
          className="flex flex-col items-center gap-3 text-center font-bold"
          {...getRootProps({ className: 'dropzone lg:w-96 w-full ' })}
        >
          <input {...getInputProps()} />
          <p className="text-[14px] text-[#838383]">
            Drag And Drop Your Photo Here
          </p>
          <div className="flex flex-col items-center text-[11px] text-[#545454]">
            <p>JPG,PNG Or WEBP Format</p>
            <p>Maximum Size - 2MB.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-[300px] w-[500px] flex-col items-center justify-center gap-10 rounded-xl bg-[#FFFFFF] p-6 font-roboto shadow-2xl lg:h-[350px] lg:w-[640px]">
      <WhatsAppTree styles="absolute" />

      <div className="flex h-full w-full flex-col items-center justify-between">
        {/* Title and CrossButton */}
        <TopTitle setProfilePopUp={setProfilePopUp} />

        <div className="justify-emd flex w-full items-end gap-2">
          {/* Upload Box */}
          {/* <UploadBox /> */}

          {/* Bottom Buttons */}
          <div className="flex w-full items-center justify-between gap-4">
            <label className="-center flex h-[30px] w-[125px] items-center justify-center rounded-lg border-[1.2px] border-[#FC4D6D] text-center font-bold text-[#545454] lg:h-[42.59px] lg:w-[156.29px]">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              Upload photo
            </label>
            <Buttons
              label="Save Changes"
              styles="font-medium text-[#FFFFFF] bg-[#FC4D6D]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePhotoPopUp

// Top Title
const TopTitle = ({ setProfilePopUp }) => {
  return (
    <div className="flex w-full items-center justify-between pl-2">
      <p className="text-lg font-bold text-[#3F3F3F] lg:text-2xl">
        Upload Profile Photo
      </p>
      <span onClick={() => setProfilePopUp({ ...false })}>
        <CrossIcon />
      </span>
    </div>
  )
}

// Buttons
const Buttons = ({ label, styles }) => {
  return (
    <button
      className={`h-[30px] w-[125px] rounded-lg text-center lg:h-[42.59px] lg:w-[156.29px] ${styles}`}
    >
      {label}
    </button>
  )
}
