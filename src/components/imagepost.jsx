import React, { useState } from "react";
import { Formik, Form } from "formik";
const Imagepost = () => {
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('')
  return (
    <>
      <div className="container">
        <Formik
          initialValues={{
            avatar: '', }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
        {(formprops)=>(
            <Form>
                <img width={100} src={avatarPreview} alt="" />
              <input
                type="file"
                name="image"
                onChange={(e) =>{
                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0])
                    reader.onload = () => {
                    if (reader.readyState === 2) {
                        setAvatar(reader.result)
                        setAvatarPreview(reader.result)
                        formprops.setFieldValue('avatar',reader.result)
                    }
                }
            }
        }
              />
              <button type="submit">Submit</button>
            </Form>
        )}
        </Formik>
      </div>
    </>
  );
};
export default Imagepost;

