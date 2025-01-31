import {
  ATHOSButton,
  ATHOSColors,
  ATHOSDynamicTable,
} from "@athosws/react-components";
import { useState } from "react";
import { FaFile, FaPlus } from "react-icons/fa";
import { tdata } from "./data-CC71BNrg8tmzETG2KjpiS";
const Tabela = () => {
  const [tableData, setTableData] = useState(tdata);

  return (
    <ATHOSDynamicTable
      resizeable
      autoLockHeight
      wrapperClassName="h-4/5"
      tableWrapperClassName="h-[50vh]"
      boldHeader
      persistPrimaryColumn={false}
      extraColumns={[
        {
          showCondition: (data) =>
            parseFloat(data.currency.replace("$", "")) > 3000,
          component: (data) => (
            <ATHOSButton
              onClick={() => {
                setTableData((prev) => {
                  return prev.filter((d) => d.id !== data.id);
                });
              }}
              small
              type="alt"
              color="#cf1e94"
            >
              Fazer Peça
            </ATHOSButton>
          ),
        },
        {
          //showCondition: (data) => data.status === "Open",
          component: (data) => (
            <ATHOSButton small type="alt" color="#cf1e94">
              <FaFile />
            </ATHOSButton>
          ),
        },
      ]}
      startShort={{
        address: true,
      }}
      tableName="Processos em atuação"
      tableStyle={{
        accentColor: ATHOSColors.grey.darker_2,
        textColor: ATHOSColors.white.eggshell,
        highlightColor: ATHOSColors.aqua.default,
        cellTextColor: {
          global: "blue",
          specific: {
            address: {
              global: "green",
              specificIndex: { indexes: [0, 2, 4], color: "red" },
            },
            name: {
              condional: {
                showCondition: (rowColumnData) => {
                  // console.log(rowColumnData);
                  return rowColumnData == "Brennan Maxwell";
                },
                color: "green",
              },
            },
          },
        },
        columnTextColor: {
          global: "red",
          specific: { address: "green" },
        },
      }}
      data={tableData}
      columnsToShow={[
        "country",
        "address",
        "phone",
        "currency",
        "name",
        "region",
      ]}
      spacingBetweenCells={10}
      spacingBetweenColumns={14}
      spacingHeader={15}
      colConfig={{
        name: { label: "Name" },
        address: {
          label: "Adress",
          maxWidth: 100,
          shortOnlyifCut: true,
          maxCharToCut: 20,
          minColWidthToShort: 200,
        },
      }}
      selectedRowsTooltip={{
        mainFunc: {
          icon: <FaPlus />,
          onClick: (selectedData) => {
            console.log("main function", selectedData);

            setTableData((prev) => {
              //remove selectedData from tableData
              return prev.filter((data) => {
                return !selectedData.some(
                  (selected) => selected.id === data.id
                );
              });
            });
          },
        },
        othersFunc: [
          {
            label: "Enviar Email",
            onClick: (selectedData) => {
              console.log("others function", selectedData);
              const td = [...tableData];
              const newTd = td.filter((data) => {
                return !selectedData.some(
                  (selected) => selected.id === data.id
                );
              });
              //console.log(newTd);
              setTableData(newTd);
            },
          },
          {
            label: "Print",
            onClick: (selectedData) => {
              console.log("others function", selectedData);
              const td = [...tableData];
              const newTd = td.filter((data) => {
                return !selectedData.some(
                  (selected) => selected.id === data.id
                );
              });
              //console.log(newTd);
              setTableData(newTd);
            },
          },
        ],
      }}
    />
  );
};

export default Tabela;
