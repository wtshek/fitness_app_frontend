import { ExerciseGroup } from "##/components/ExerciseGroup";
import { Layout } from "##/components/Layout";
import { fetchExerciseGroups } from "##/services/api/exercise";
import { ExerciseGroupType } from "##/utils/types";
import { FC, useEffect, useState } from "react";

export const ExerciseGroups: FC = () => {
  const [data, setData] = useState<ExerciseGroupType[]>([]);

  useEffect(() => {
    const handleFetchExerciseGroup = async () => {
      const data = await fetchExerciseGroups();

      setData(data);
    };

    handleFetchExerciseGroup();
  }, []);

  return (
    <Layout>
      <div
        className={`grid grid-cols-3 justify-center items-center min-h-screen pt-4 pb-mobileBottom`}
      >
        {data.map((item) => (
          <ExerciseGroup
            imagePath={item.image}
            name={item.title}
            path={item.path}
            key={item.id}
          />
        ))}
      </div>
    </Layout>
  );
};
