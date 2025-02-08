import { Input } from "@/components/ui/input";
import { Mic, Camera, Paperclip, Laugh } from "lucide-react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

export default function ChatInput() {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleCameraClick = () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error("Camera access not supported in this browser");
            return;
        }
        
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                console.log("Camera accessed", stream);
            })
            .catch(error => {
                console.error("Error accessing camera", error);
            });
    };

    const handleFileClick = () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.onchange = (event) => {
            const files = (event.target as HTMLInputElement).files;
            if (files && files.length > 0) {
                console.log("Files selected", files);
            }
        };
        fileInput.click();
    };
    const handleEmojiClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const onEmojiClick = (emojiObject: { emoji: string }) => {
        console.log("Emoji selected", emojiObject.emoji);
    };

    const handleMicClick = () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error("Microphone access not supported in this browser");
            alert("Your browser does not support microphone access. Please try using a different browser.");
            return;
        }

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                console.log("Microphone accessed", stream);
            })
            .catch(error => {
                console.error("Error accessing microphone", error);
                alert("There was an error accessing the microphone. Please check your browser settings and permissions.");
            });
    };

    return (
        <div className="flex items-center p-3 w-full relative">
            <div className="flex items-center bg-white rounded-full px-4 py-2 w-full shadow-sm border border-gray-300">
                <Laugh onClick={handleEmojiClick} className="cursor-pointer text-gray-500 hover:text-gray-700 transition" />
                <Input 
                    type="text" 
                    placeholder="Type a message" 
                    className="flex-1 border-none focus-visible:ring-ring focus-visible:ring-0 px-3 text-gray-700 outline-none" 
                />
                <Paperclip onClick={handleFileClick} className="cursor-pointer text-gray-500 hover:text-gray-700 transition mx-2" />
                <Camera onClick={handleCameraClick} className="cursor-pointer text-gray-500 hover:text-gray-700 transition" />
            </div>
            {showEmojiPicker && (
                <div className="absolute bottom-16 right-5 z-50 bg-white shadow-lg rounded-lg p-2">
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
            )}
            <button onClick={handleMicClick} className="ml-3 text-white bg-[#00927C] rounded-full p-3 flex items-center justify-center shadow-md hover:bg-[#007f6a] transition">
                <Mic />
            </button>
        </div>
    );
}
