import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Upload from "../components/Upload";

export default function Registration() {
  const { register, handleSubmit } = useForm();
  // const [kartu, setKartu] = useState("");
  // const [surat, setSurat] = useState("");
  // const [bukti, setBukti] = useState("");

  const onSubmit = (data) => {
    const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("nama", data.nama);
    // formData.append("ttl", data.ttl);
    // formData.append("gender", data.gender);
    // formData.append("sekolah", data.sekolah);
    // formData.append("lomba", data.lomba);
    // formData.append("idline", data.idline);
    // formData.append("notelp", data.notelp);
    // formData.append("kartu", data.kartu);
    // formData.append("surat", data.surat);
    // formData.append("foto", data.foto);
    // formData.append("bukti", data.bukti);

    axios
      .post("http://nmgbc-backend.vercel.app/api/register", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-[url('../public/img/bg.png')] font-Volkswagen min-h-screen">
        <h1 className="text-4xl lg:text-5xl text-center py-12">Registration</h1>
        <div className="pb-32 px-20 md:px-[200px] xl:px-[640px]">
          <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
            <label>E-Mail</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("email", { required: true, maxLength: 50 })}
            />
            <label>Nama Lengkap</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("nama", { required: true, maxLength: 50 })}
            />
            <label>Tempat, Tanggal Lahir</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("ttl", { required: true, maxLength: 50 })}
            />
            <label>Jenis Kelamin</label>
            <select
              {...register("gender", { required: true })}
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED] cursor-pointer"
            >
              <option value="">Select one</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <label>Asal Sekolah</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("sekolah", { required: true, maxLength: 50 })}
            />
            <label>Lomba yang Dipilih</label>
            <select
              {...register("lomba", { required: true })}
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED] cursor-pointer"
            >
              <option value="">Select one</option>
              <option value="Biology competition">Biology competition</option>
              <option value="Public poster">Public poster</option>
              <option value="Health speech contest">Speech</option>
            </select>
            <label>ID Line</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("idline", { required: true, maxLength: 20 })}
            />
            <label>Nomor HP</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("notelp", {
                required: true,
                minLength: 10,
                maxLength: 13,
              })}
            />
            <label>Link Kartu Identitas</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("kartu", {
                required: true,
              })}
            />
            <label>Link Surat Keterangan</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("surat", {
                required: true,
              })}
            />
            <label>Link Pas Foto</label>
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("foto", {
                required: true,
              })}
            />
            <label>Link Bukti Transfer</label>
            {/* <p className="text-xs">
              GITA MARCIA KARINA <br /> Bank Mandiri <br /> 1020009940153
            </p> */}
            <input
              className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
              {...register("bukti", {
                required: true,
              })}
            />

            <input
              className="rounded-full border-2 mt-4 px-2 py-1 text-[#E46871] border-black cursor-pointer"
              type="submit"
            />
            {/* <Upload uploadFile={kartu} setUploadFile={setKartu}>
          Upload kartu pelajar/identitas
        </Upload>
        <Upload uploadFile={surat} setUploadFile={setSurat}>
          Upload surat keterangan sekolah
        </Upload>
        <Upload uploadFile={bukti} setUploadFile={setBukti}>
          Upload bukti pembayaran
        </Upload> */}
          </form>
        </div>
      </div>
    </>
  );
}
