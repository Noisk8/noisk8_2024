import React from "react";
import {Badge, Avatar} from "@nextui-org/react";

export default function App() {
  return (
    <div>
    <div className="flex gap-3 items-center">
      <Badge content="5" color="default">
        <h1 className="text-withe"> ddddd</h1>
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
        />
      </Badge>
      <Badge content="5" color="primary">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>
      <Badge content="5" color="secondary">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
        />
      </Badge>
      <Badge content="5" color="success">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </Badge>
      <Badge content="5" color="warning">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
      </Badge>
      <Badge content="5" color="danger">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </Badge>
    </div>
    </div>
  );
}
