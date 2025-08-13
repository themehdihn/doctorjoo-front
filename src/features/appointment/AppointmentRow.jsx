import { useState } from "react";
import Button from "../../components/modules/Button";
import Table from "../../components/modules/Table";
import { toLocalDateShort, toLocalDateTime } from "../../utils/dateFormatter";
import { numberWithCommas } from "../../utils/toPersianNumber";
import Modal from "../../components/modules/Modal";
import useCancelAppointmentByAdmin from "./useCancelAppointment";
import ConfirmDelete from "../../components/modules/ConfirmDelete";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const cancelledStatusMap = {
  true: { label: "لغو شده", className: "badge--danger" },
  false: { label: "خیر", className: "badge--secondary" },
};

const paymentStatusMap = {
  true: { label: "تایید شده", className: "badge--success" },
  false: { label: "در انتظار تایید", className: "badge--secondary" },
};

const completedStatusMap = {
  true: { label: "تکمیل شده", className: "badge--success" },
  false: { label: "در انتظار تکمیل", className: "badge--secondary" },
};

function AppointmentRow({ appointment, index }) {
  const {
    _id,
    userData,
    docData,
    amount,
    slotTime,
    date,
    cancelled,
    payment,
    isCompleted,
  } = appointment;

  const [openCancelAppo, setOpenCancelAppo] = useState(false);
  const { cancelAppointment,isCancelling } = useCancelAppointmentByAdmin();
  const queryClient = useQueryClient();

//   const cancelAppointmentHandler = async (id) => {
//     try {
//         console.log("iddd",id)
//       const { message } = await mutateAsync(id);
//       toast.success(message);
//       queryClient.invalidateQueries({ queryKey: ["appointments"] });
//     } catch (error) {
//       toast.error(error?.respone?.data?.errors?.message);
//     }
//   };

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{userData.name}</td>
      <td>دکتر {docData.name}</td>
      <td>{toLocalDateShort(date)}</td>
      <td>{toLocalDateTime(slotTime)}</td>
      <td>{numberWithCommas(amount)} تومان</td>
      <td>
        <span className={`badge ${cancelledStatusMap[cancelled]?.className}`}>
          {cancelledStatusMap[cancelled]?.label}
        </span>
      </td>
      <td>
        <span className={`badge ${paymentStatusMap[payment]?.className}`}>
          {paymentStatusMap[payment]?.label}
        </span>
      </td>
      <td>
        <span className={`badge ${completedStatusMap[isCompleted]?.className}`}>
          {completedStatusMap[isCompleted]?.label}
        </span>
      </td>
      <td>
        <Button disabled={cancelled} onClick={() => setOpenCancelAppo(true)} variant="danger">
          لغو نوبت
        </Button>
        <Modal
          title={`لغو نوبت کاربر ${userData.name}`}
          open={openCancelAppo}
          onClose={() => setOpenCancelAppo(false)}
        >
          <ConfirmDelete
            onConfirm={() =>
              cancelAppointment(appointment._id, {
                onSuccess: () => setOpenCancelAppo(false),
              })
            }
            resourceName={appointment.userData.name}
            onClose={() => setOpenCancelAppo(false)}
            disabled={false}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default AppointmentRow;
