'use client'
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import React, { useState } from 'react';

export default function page() {
    const [formData, setFormData] = useState({
        fullName: 'Kamrul Hasan',
        mobileNumber1: '',
        email: '',
        mobileNumber2: '',
    });

    const [uploadedFiles, setUploadedFiles] = useState({
        nidPicture: null,
        drivingLicense: null,
        registrationPaper: null,
        taxToken: null,
        insurancePaper: null,
        fitnessPaper: null,
        ownerNid: null,
    });

    const handleFileUpload = (documentType, e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedFiles({
                ...uploadedFiles,
                [documentType]: file,
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpload = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        console.log('Uploaded Files:', uploadedFiles);
    };

    const DocumentUploadBox = ({ documentType, label, hasUploadIcon = true, hasDeleteIcon = false }) => {
        return (
            <div className="relative border border-dashed border-gray-300 p-3 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-gray-600">{label}</span>
                </div>
                <div className="flex">
                    {hasDeleteIcon && (
                        <button className="cursor-pointer p-1 mr-1">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    )}

                    {hasUploadIcon && (
                        <label className="cursor-pointer p-1">
                            <input
                                type="file"
                                onChange={(e) => handleFileUpload(documentType, e)}
                                className="hidden"
                            />
                            <svg className="h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </label>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="max-w-3xl mx-auto px-4 py-16">
                <div className="mb-8">
                    <h1 className="text-2xl font-medium text-[var(--text-black)] mb-2">Join Us Driver</h1>
                    <p className="text-sm text-[var(--text-gray)]">
                        Lorem ipsum dolor sit amet consectetur, id faucibus lacinia conque semper vitae consectetur.
                        <br />
                        Amet pharetra ipsum suspendisse diam maecenas.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg font-medium text-[var(--text-black)] mb-4">Please fill the form:</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-gray)] mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-gray)] mb-1">Mobile Number</label>
                            <input
                                type="text"
                                name="mobileNumber1"
                                placeholder="Enter your mobile number"
                                value={formData.mobileNumber1}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-gray)] mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-gray)] mb-1">Mobile Number</label>
                            <input
                                type="text"
                                name="mobileNumber2"
                                placeholder="Enter your mobile number"
                                value={formData.mobileNumber2}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-[#757575] focus:border-[var(--secondary)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--secondary)]"
                            />
                        </div>
                    </div>


                </div>

                <div>
                    <h2 className="text-lg font-medium text-[var(--text-black)] mb-4">Please upload your some document:</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DocumentUploadBox documentType="nidPicture" label="Your_NID_picture.jpg" hasUploadIcon hasDeleteIcon />
                        <DocumentUploadBox documentType="drivingLicense" label="Driving_Licence_picture.jpg" hasDeleteIcon hasUploadIcon />

                        <DocumentUploadBox documentType="registrationPaper" label="Registration_Paper_picture.jpg" hasUploadIcon hasDeleteIcon />
                        <DocumentUploadBox documentType="taxToken" label="TAX_Token_picture.jpg" hasUploadIcon hasDeleteIcon />

                        <DocumentUploadBox documentType="insurancePaper" label="Insurance_Paper_picture.jpg" hasUploadIcon hasDeleteIcon />
                        <DocumentUploadBox documentType="fitnessPaper" label="Fitness_Paper_picture.jpg" hasUploadIcon hasDeleteIcon />

                        <DocumentUploadBox documentType="ownerNid" label="Owner_NID_picture.jpg" hasUploadIcon hasDeleteIcon />
                        <div>
                            <button
                                onClick={handleUpload}
                                className="w-full py-3 bg-[var(--secondary)] hover:bg-transparent text-white hover:text-[var(--secondary)] border border-[var(--secondary)] hover:border-[var(--secondary)] rounded-full transition-colors cursor-pointer"
                            >
                                Upload
                            </button>
                        </div>
                    </div>


                </div>
            </div>

            <DownloadApp />

        </>
    );
}