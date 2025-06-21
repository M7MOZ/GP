import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdCancel } from "react-icons/md";
function FileUploader() {
    const [file, setFile] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const uploadedFile = acceptedFiles[0];
        if (uploadedFile) {
            setFile(Object.assign(uploadedFile, {
                preview: URL.createObjectURL(uploadedFile)
            }));
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
        'image/*': [], // Allow all images; change this to pdf if needed
        'application/pdf': [] 
        },
        multiple: false
    });

    const removeFile = () => {
        URL.revokeObjectURL(file?.preview); // Cleanup memory
        setFile(null);
    };

    return (
        <div className="w-full h-[250px] mx-auto">
            <div {...getRootProps()} className="cursor-pointer h-[150px] border-2 border-dashed border-gray-400 p-10 text-center rounded-lg">
                <input {...getInputProps()} />
                <p className="text-gray-600 text-3xl mt-4">اسحب الملف هنا أو انقر لاختياره</p>
            </div>

            {file && (
                <div className="relative mt-4 w-15 h-15 md:w-32 md:h-32 border rounded overflow-hidden shadow">
                    <button onClick={removeFile} className="absolute top-0 right-0 text-2xl cursor-pointer bg-red rounded-full text-red-500">
                        <MdCancel />
                    </button>
                    {file.type.startsWith("image/") ? (
                        <img
                        src={file.preview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-sm text-gray-600 px-2 text-center">
                            {file.name}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FileUploader;
