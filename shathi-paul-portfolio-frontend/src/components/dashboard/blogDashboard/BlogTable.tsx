import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IBlogData } from "@/types";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const BlogTable = (blogData: IBlogData[]) => {
  return (
    <div className="bg-white/70 w-[90%] mx-auto rounded-lg mt-20 p-4">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Id</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Short Description</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogData.map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{data.image}</TableCell>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.shortDes}</TableCell>
              <TableCell>{data.description}</TableCell>
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

export default BlogTable;
