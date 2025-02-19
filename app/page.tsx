import { activities, workoutGoals, workoutTypes } from "./utils/workouts";

export default function Index() {
  return (
    <>
      <main>
        <section className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Welcome to Workouter</h1>
              <p className="py-6">
                Build workouts for Apple Watch.
                For free.
              </p>
              <div>
                <form action="">
                  <div className="">
                    <label className="form-control w-full max-w-xs">
                      <div className="label sr-only">
                        <span className="label-text">Activity</span>
                      </div>
                      <select className="select select-bordered">
                        <option disabled selected defaultValue="Select workout">Activity</option>
                        {activities().map(([value, activity]) => (<option key={value} value={value}>{activity}</option>))}
                      </select>
                    </label>
                  </div>
                  <div className="pt-2">
                    <label className="form-control w-full max-w-xs">
                      <div className="label sr-only">
                        <span className="label-text">Workout type</span>
                      </div>
                      <select className="select select-bordered">
                        <option disabled selected defaultValue="Select workout">Workout type</option>
                        {workoutTypes().map(([value, activity]) => (<option key={value} value={value}>{activity}</option>))}
                      </select>
                    </label>
                  </div>
                  <div className="pt-2">
                    <label className="form-control w-full max-w-xs">
                      <div className="label sr-only">
                        <span className="label-text">Workout type</span>
                      </div>
                      <select className="select select-bordered">
                        <option disabled selected defaultValue="Select workout">Goal</option>
                        {workoutGoals().map(([value, activity]) => (<option key={value} value={value}>{activity}</option>))}
                      </select>
                    </label>
                  </div>
                  <div className="pt-2">
                    <input type="number" min={0} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                  </div>
                </form>
                <button className="btn btn-primary mt-4">Create workout</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>)
}
