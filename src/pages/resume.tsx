import React, {useState, useEffect} from "react";

const ResumePage: React.FC = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
          setHeight(window.innerHeight); // Adjust padding/margins if needed
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
      }, []);

      return (
        <div>
            <embed 
                src="/mattmiss-resume.pdf" 
                type="application/pdf" 
                width="100%" 
                height={height} 
            />
        </div>
)};

export default ResumePage;
