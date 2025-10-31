import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IProjects } from "@/types";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ProjectTable = (projectData: IProjects[]) => {
  return (
    <div className="bg-white/70 mx-auto rounded-lg mt-20 p-4">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Id</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Stack</TableHead>
            <TableHead>Features</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Project Link</TableHead>
            <TableHead>Live Link</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projectData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{data.img}</TableCell>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.stack}</TableCell>
              <TableCell>{data.features}</TableCell>
              <TableCell>{data.description}</TableCell>
              <TableCell>{data.projectLink}</TableCell>
              <TableCell>{data.link}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <button className="text-xl text-green-800 p-2 relative z-30">
                  <FaEdit />
                </button>
                <button className="text-xl text-red-800 p-2 relative z-30">
                  <MdDeleteForever />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTable;
