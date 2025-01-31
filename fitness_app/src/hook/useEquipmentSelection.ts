import { useState } from "react";

const useEquipmentSelection = () => {
    const [dumbbell, setDumbbell] = useState<boolean>(true);
    const [treadmill, setTreadmill] = useState<boolean>(false);
    const [rope, setRope] = useState<boolean>(false);

    const selectEquipment = (equipment: "dumbbell" | "treadmill" | "rope") => {
        if(equipment === "dumbbell") {
            setDumbbell(true);
            setTreadmill(false);
            setRope(false);
          };
        
          if(equipment === "treadmill") {
            setDumbbell(false);
            setTreadmill(true);
            setRope(false);
          };
        
          if(equipment === "rope")  {
            setDumbbell(false);
            setTreadmill(false);
            setRope(true);
          };
        
    }

    return [
        dumbbell,
        treadmill,
        rope,
        selectEquipment
    ] as const;
}

export default useEquipmentSelection;