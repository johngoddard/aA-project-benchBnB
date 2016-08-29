class Api::BenchesController < ApplicationController
  def index
    puts " ---------------Params HERE --------------------"
    puts params
    @benches = Bench.all

    @benches = @benches.select{|bench| bench.in_bounds(params[:bounds])}


  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      @benches = Bench.all
      render :index
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :num_seats)
  end
end
