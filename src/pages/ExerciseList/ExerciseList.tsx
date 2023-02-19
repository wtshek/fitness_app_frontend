import { ExerciseListItem } from "##/components/ExerciseList";
import { Layout } from "##/components/Layout";
import { fetExerciseListByGroup } from "##/services/api/exercise";
import { ExerciseType } from "##/utils/types";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ExerciseList: FC = () => {
  const { pathname } = useLocation();
  const exercise = pathname.split("/")[1];
  const [exercises, setExercises] = useState<ExerciseType[]>([]);

  useEffect(() => {
    const handleFetchExerciseByGroup = async () => {
      const data = await fetExerciseListByGroup(exercise);
      setExercises(data);
    };

    handleFetchExerciseByGroup();
  }, [exercise]);

  return (
    <Layout>
      <div className="px-8">
        {exercises.map((item) => (
          <ExerciseListItem {...item} key={item.title} />
        ))}
      </div>
    </Layout>
  );
};
