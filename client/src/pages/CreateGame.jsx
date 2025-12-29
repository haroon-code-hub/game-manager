import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

async function addGame(newGame) {
  const res = await fetch("http://localhost:3000/api/games", {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(newGame),
  });
  return res.json();
}

function CreateGame() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addGame,
    onSuccess: () => {
      queryClient.invalidateQueries(["games"]);
      navigate("/");
    },
  });

  const onSubmit = (formData) => {
    mutate({
      name: formData.name,
      platform: formData.platform,
      genre: formData.genre,
    });
  };

  return (
    <div className="page-container">
      <h2>Add a new game</h2>
      <form
        className="form-container bg-card"
        style={{ padding: "1rem" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Game Name</label>
        <input
          type="text"
          placeholder="e.g. Super Mario"
          {...register("name", { required: "Name is required." })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <label>Platform</label>
        <input
          type="text"
          placeholder="e.g. Play Station, PC"
          {...register("platform", { required: "Platform is required." })}
        />
        {errors.platform && (
          <p style={{ color: "red" }}>{errors.platform.message}</p>
        )}
        <label>Genre</label>
        <input
          type="text"
          placeholder="e.g. action, puzzle, racing"
          {...register("genre", { required: "Genre is required." })}
        />
        {errors.genre && <p style={{ color: "red" }}>{errors.genre.message}</p>}

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateGame;
